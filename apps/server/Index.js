import dotenv from "dotenv"
import express from "express"
import multer from "multer"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import path from "path"
import {connect} from "./Config/Connect.js"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const app=express();

const PORT=process.env.PORT||3500

connect()

app.use(cors());

app.use(cookieParser());

app.use(express.static(path.join(__dirname,"Public")))

app.use(express.json())

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "Public", "Img")),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage:storage });




 mongoose.connection.once("open",()=>{
    console.log("connected to mongoDB")

    app.listen(PORT,()=>{
        console.log("Rnning on "+PORT)
    })
})
