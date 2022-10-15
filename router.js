import { createRequire } from "module";
const require = createRequire(import.meta.url);

import userController from "./controllers/usercontroller.js";
import hospitalController from "./controllers/hospitalcontroller.js";
import doctorController from "./controllers/doctorcontroller.js";

const express = require("express");
const app = express();
app.use(express.json());

const router = express.Router();

router.get("/hospital",(req, res)=>{
    hospitalController.calcDistance(req, res);
});
router.post("/hospital", async(req, res)=>{
    const data = req.query;
    doctorController.getCategories(data);
});

router.get("/hospital/category", (req, res)=>{
    doctorController.showCategories(req, res);
})


router.post("/user", async(req, res)=>{
    const data = req.query;
    userController.getUserData(data)
});

router.get("/pharmacy");


router.get("/doc");


router.get("/category");


router.get("/drugs");


router.get("/admin");
router.post("/admin");

export default router;