import Refresh from "../Controllers/Auth/Refresh.js";
import express from "express";
const Router =express.Router();

Router.route("/Refresh")
.get(Refresh)

export default Router