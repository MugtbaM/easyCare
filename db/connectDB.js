import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require ("mongoose");

const connectDB = async (dbURL) => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected Seccussfully to the DataBase");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;