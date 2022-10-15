import { createRequire } from "module";
const require = createRequire(import.meta.url);

import doctorModel from "../db/models/doctormodel.js";
import categoryModel from "../db/models/categorymodel.js";

class doctorController {
    static getCategories = async(data)=>{
        let items = await doctorModel.find({hospital: data.hospital});
        for(let i = 0; i < items.length; i++){
            categoryModel.create({
                "name": items[i].category,
                "doctor": items[i].name
            });
        }
    }
    static showCategories = async(req, res)=>{
        const catItems = await categoryModel.findOne();
        console.log(catItems);
        return res.send(catItems);
    }
}

export default doctorController;