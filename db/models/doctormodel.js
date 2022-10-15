import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name:{type: String},
    phone:{type: Number},
    category:{type: String},
    hospital:{type: String}
});

const doctorModel = new mongoose.model("doctor", doctorSchema);

export default doctorModel;