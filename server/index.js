const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const port = 4000;
const sequelize = require("./Models/index");

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  await sequelize.sync({ force: true });
  console.log("🖥️🖥️🖥️ Postgres database is running with sequelize");

  app.listen(port, () => {
    console.log(`🍏🍏🍏 Server is running on port: ${port}`);
  });
})();
