import Login from "../Controllers/Auth/Login.js";
import express from "express";
const Router =express.Router();

Router.route("/Login")
.post(Login)

export default Router