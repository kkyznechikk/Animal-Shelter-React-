const Pets = require("../models/petModel");

const createPet = async (req, res) => {
  const newPet = await Pets.create(req.body);
  res.status(201).json(newPet);
};

const getPet = async (req, res) => {
  const pet = await Pets.findById(req.params.id);
  res.status(200).json(pet);
};

const getAllPets = async (req, res) => {
  const pets = await Pets.find();
  res.status(200).json(pets);
};

const deletePet = async (req, res) => {
  await Pets.findOneAndDelete({ _id: req.params.id });
  res.status(204).end();
};

module.exports = { createPet, getPet, getAllPets, deletePet };
