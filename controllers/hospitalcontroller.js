import { createRequire } from "module";
const require = createRequire(import.meta.url);


import hospitalModel from "../db/models/hospitalmodel.js";
import usermodel from "../db/models/usermodel.js";


class hospitalController {

    static calcDistance = async (req, res) => {
        // console.log("iam here");

        // console.log(res)

            let userdata = await usermodel.findOne().sort({date: -1});
            // console.log(userdata);
            const lt1 = userdata.latit;
            const lo1 = userdata.longit;

            let loca = await hospitalModel.find();
            // console.log(loca[0].name);
            const locArray = [];
            // const lt1 = parseFloat(gps.latit);
            // const lo1 = parseFloat(gps.longit);
            // console.log(lt1);
            for (let i = 0; i < loca.length; i++) {
                let dist = 3963.0 * Math.acos((Math.sin(lt1) * Math.sin(loca[i].latit)) + (Math.cos(lt1) * Math.cos(loca[i].latit) * Math.cos(loca[i].longit - lo1)));
                const latitude = loca[i].latit;
                // console.log(loca[i].name)
                locArray.push({
                    "id": loca[i].id,
                    "name": loca[i].name,
                    "phone": loca[i].phone,
                    "ambulance": loca[i].ambulance,
                    "latit": loca[i].latit,
                    "longit": loca[i].longit,
                    "dist": dist
                })
            }
            locArray.sort((a, b) => {
                return a.dist - b.dist;
            });
            // console.log(locArray);

            return res.json(locArray);

    }
    static checkAmbu = async (req, res) => {
        const exist = await hospitalModel.find({ambulance: true}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                try {
                    res.send(exist);
                } catch (error) {
                    console.log(err);
                }
            }
        });
    }
}

export default hospitalController;

// (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }