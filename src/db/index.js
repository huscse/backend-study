import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`
        );
        console.log("yay!");
        console.log("I finally know how to connect a mongodb database");
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error);
        process.exit(1);
    }
};

export default connectDB;
