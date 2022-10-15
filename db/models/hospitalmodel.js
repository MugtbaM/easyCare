import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    name:{type: String},
    phone:{type: Number},
    ambulance:{type: Boolean},
    latit: {type: Number},
    longit: {type: Number}
});

const hospitalModel = new mongoose.model("hospital", hospitalSchema);

export default hospitalModel;