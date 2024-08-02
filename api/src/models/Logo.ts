import {Schema, model} from "mongoose";

export type TLogo = {
    name: string,
    createdAt: Date,
    updatedAt: Date,
}

const logoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
});

const Logo = model<TLogo>("Logo", logoSchema);

export default Logo;
