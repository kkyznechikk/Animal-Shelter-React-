const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Internal exports
const { mailService } = require("./src/services/mailService");
const {
  createPet,
  getPet,
  getAllPets,
  deletePet,
} = require("./src/services/petService");

// constants
const port = 3333;
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/all-pets", getAllPets);
app.get("/pet/:id", getPet);
app.delete("/pet/:id", deletePet);
app.post("/pet", createPet);
app.post("/form", mailService);

// Run server
app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://anna:pusha@atlascluster.9dsatfr.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("Подключение к БД установлено");
    });
  console.log(`Сервер запущен на порту ${port}`);
});
