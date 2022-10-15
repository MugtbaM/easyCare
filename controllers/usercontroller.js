import { createRequire } from "module";
const require = createRequire(import.meta.url);

import usermodel from "../db/models/usermodel.js";

class userController{
    static getUserData = async(data) =>{
        try {
            const username = data.name;
            const userid = data.id;
            const userlong = data.longit;
            const userlat = data.latit;
            const currentdate = new Date();
            const newUser = new usermodel({
                name: username,
                id: userid,
                longit: userlong,
                latit: userlat,
                date: currentdate
            })
            newUser.save();

        } catch (error) {
            console.log(error);
        }
    }
}

export default userController;