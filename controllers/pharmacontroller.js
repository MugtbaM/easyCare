import { createRequire } from "module";
const require = createRequire(import.meta.url);

import pharmaModel from "../db/models/pharmacymodel";
class pharmaController{
static calcDistance = async (gps) => {
    // console.log("iam here");
    try {
        let loca = await pharmaModel.find();
        // console.log(loca[0].name);
        const locArray = [];
        const lt1 = parseFloat(gps.latit);
        const lo1 = parseFloat(gps.longit);
        // console.log(lt1);
        for (let i = 0; i < loca.length; i++) {
            let dist = 3963.0 * Math.acos((Math.sin(lt1) * Math.sin(loca[i].latit)) + (Math.cos(lt1) * Math.cos(loca[i].latit) * Math.cos(loca[i].longit - lo1)));
            const latitude = loca[i].latit;
            console.log(loca[i].name)
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

        console.log(locArray);

    } catch (error) {
        console.log(error);
    }
}
}
