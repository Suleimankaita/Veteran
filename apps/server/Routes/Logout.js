import Logout from "../Controllers/Auth/Logout.js";
import express from "express";
const Router =express.Router();

Router.route("/Logout")
.post(Logout)

export default Router