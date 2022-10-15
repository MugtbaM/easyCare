import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {type: String},
    id: {type: String},
    longit: {type: Number},
    latit: {type: Number},
    date: Date
})

const usermodel = new mongoose.model("user", userschema);

export default usermodel;