import {createStore} from "vuex";
import templates from "./modules/templates.js";
import signatureInfo from "./modules/signatureInfo.js";


export default createStore({
    modules: {
        templates,
        signatureInfo,
    }
})