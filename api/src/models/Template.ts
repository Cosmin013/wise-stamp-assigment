import {Schema, model} from "mongoose";

export type TTemplate = {
    body: string
}

const templateSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    body: {
        type: String,
        required: true,
    },
});

const Template = model<TTemplate>("Template", templateSchema);

export default Template;
