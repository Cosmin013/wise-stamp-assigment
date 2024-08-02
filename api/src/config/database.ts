import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI: string = process.env.MONGO_URI;
        console.log(mongoURI)
        await connect(mongoURI);
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;