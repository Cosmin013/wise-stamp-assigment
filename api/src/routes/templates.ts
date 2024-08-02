import {Router} from "express";
import Template from "../models/Template";
import multer from "multer";
import {getObjectSignedUrl, uploadFile} from "../config/s3";
import Logo from "../models/Logo";
import {generateSignature} from "../helpers";
const router = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/',  async (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        res.status(400).send("Missing required fields");
    }

    const template = new Template({
        title,
        body
    })

    try{
        await template.save()
        res.send({template})
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server Error");
    }
})

router.get('/',  async (req, res) => {
    try {
        const templates = await Template.find()
        templates.map(template => {
            template.body = generateSignature(template.body, {
                fullName: "Full Name",
                email: "email",
                phone: "+0 (000) 000-0000",
                logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt4-FpDi0D3mlIeL-AI2A7J7ni7l437QJpw&s",
            })
        })
        res.send({ templates })
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server Error");
    }

})

router.post('/:id/generate-signature', upload.single('logo'), async (req, res) => {
    let logoUrl = ""
    if (req.file) {
        const { imageKey} = await uploadFile(req.file.buffer, req.file.mimetype)
        const logo = new Logo({
            name: imageKey,
        })
        await logo.save()

        logoUrl = await getObjectSignedUrl(imageKey);
    }


    const { fullName, email, phone } = req.body;
    const { id } = req.params;


    try{
        const template =  await Template.findOne({ _id: id })

        const signature = generateSignature(template.body, {
            fullName: fullName || '',
            email: email || '',
            phone: phone || '',
            logoUrl: logoUrl || ''
        })
        res.send({ signature })
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server Error");
    }
})

export default router