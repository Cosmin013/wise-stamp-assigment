import {Express} from "express";
import templates from "./templates";

export const init = (app: Express) => {
    app.use('/templates', templates)
}