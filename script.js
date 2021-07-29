require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/subscribes')


mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (err) => console.log(err));
database.once("open", () => console.log("Database connected"));

app.use(express.json());

const subscribersRoute = require("./routes/subscribes");
app.use("/subscribers", subscribersRoute);

app.listen(1807, () => console.log("Server is running at 5000 port"));
