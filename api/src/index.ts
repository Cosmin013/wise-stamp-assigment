import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {init} from "./routes";
import connectDB from "./config/database";
import cors = require("cors");
import bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();

connectDB()

const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())

init(app)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

