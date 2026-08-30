import Registration from "../Controllers/Auth/Reg.js";
import express from "express";
const router=express.Router();

router.route('/')
.post(Registration);

export default router


