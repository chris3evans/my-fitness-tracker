const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const port = process.env.port || 3333;
const db = require("./Models/index");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../my-fitness-tracker/public")));

app.use(router);

app.get("/healthcheck", (req, res) => {
  return res.send(process.env);
  if (process.env.NODE_ENV === "production") {
    res.end("production");
  } else {
    res.end("development");
  }
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/../my-fitness-tracker/public/index.html")
  );
})(async () => {
  await db.sequelize.sync();
  console.log("🖥️🖥️🖥️ Postgres database is running with sequelize");

  app.listen(port, () => {
    console.log(`🍏🍏🍏 Server is running on port: ${port}`);
  });
})();
