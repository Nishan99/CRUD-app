const express = require("express");
const app = express();
const db = require("./models");

const cors = require('cors')
app.use(cors())
app.use(express.json());

//routers list
const profileRouter = require("./routes/Profile");
app.use("/profile", profileRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running sucessfully");
  });
});
