require("dotenv").config();
const express = require("express");
const app = express();
const port = Number(process.env.APP_PORT);

const HttpError = require("./models/http-error");

const placesRouter = require("./routers/places.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/places", placesRouter);

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

app.listen(port, () => console.log(`Express running on ${port}`));
