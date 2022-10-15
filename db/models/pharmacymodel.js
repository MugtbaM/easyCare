import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const pharmaSchema = new mongoose.Schema({
    name:{type: String},
    phone:{type: Number},
    latit: {type: Number},
    longit: {type: Number},
    drug: [{type: String}]
});

const pharmaModel = new mongoose.model("pharmacy", pharmaSchema);

export default pharmaModel;