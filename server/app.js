require("dotenv").config();
const express = require("express");
const app = express();
const port = Number(process.env.APP_PORT);
const MongoURI = process.env.MONGO_URI;
const mongoose = require("mongoose");

const placesRouter = require("./routers/places.routers");
const usersRouter = require("./routers/users.routers");

const HttpError = require("./models/http-error");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/places", placesRouter);

app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(MongoURI)
  .then(() => {
    app.listen(port, () => console.log(`Express running on ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
