const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

// config dotenv
require("dotenv").config();

// config bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder
app.use(express.static("public"));

// mongoose
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATA_BASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('strictQuery', true)

//config cors
app.use(cors());

// routes version 1
const addLocale2ReqMiddleware = require("./src/middlewares/addLocale2Req");
const V1Router = require("./src/routes");
app.use(addLocale2ReqMiddleware, V1Router);

server.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
