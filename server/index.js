const express = require("express");
// import express from "express";
const app = express();
const router = require("./router");
// import router from "./router";
const cors = require("cors");
// import cors from "cors";
const db = require("./Models/index");
// import db from "./Models/index";
const path = require("path");
// import path from "path";

app.use(express.json());
app.use(cors());

app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../my-fitness-tracker/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../my-fitness-tracker/build/index.html")
    );
  });
}

(async () => {
  await db.sequelize.sync();
  console.log("🖥️🖥️🖥️ Postgres database is running with sequelize");

  app.listen(process.env.PORT || 3333, () => {
    console.log(
      `🍏🍏🍏 Server is running on port: ${process.env.PORT || 3333}`
    );
  });
})();
