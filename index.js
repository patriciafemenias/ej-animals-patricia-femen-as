const animalA = {
  name: "Pepito",
  age: 130,
  weight: 160,
  species: "dinosaur",
  extinctionYear: 200,
  id: 1,
};

const animalB = {
  name: "Manolito",
  age: 240,
  weight: 400,
  species: "turtle",
  extinctionYear: 360,
  id: 2,
};

const getAnimalSpecies = (animal) => {
  return animal.species;
};

console.log(getAnimalSpecies(animalA));
