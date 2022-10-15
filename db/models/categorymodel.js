import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {type: String},
    doctor: {type: String}
});
const categoryModel = new mongoose.model("category", categorySchema);

export default categoryModel;