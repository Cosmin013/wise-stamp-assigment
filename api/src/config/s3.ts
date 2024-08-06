import crypto from "crypto";
import {GetObjectCommand, PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

dotenv.config()

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})

export async function uploadFile(fileBuffer: Buffer, mimetype: string) {
    const imageKey = randomImageName()

    const uploadParams = {
        Bucket: bucketName,
        Body: fileBuffer,
        Key: imageKey,
        ContentType: mimetype
    }

    await s3.send(new PutObjectCommand(uploadParams));

    return { imageKey }
}

export async function getObjectSignedUrl(key) {
    const params = {
        Bucket: bucketName,
        Key: key
    }

    const command = new GetObjectCommand(params);
    return await getSignedUrl(s3, command)
}