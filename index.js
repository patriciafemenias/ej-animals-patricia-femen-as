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
  id: 2,
};

const getAnimalSpecies = (animal) => {
  return animal.species;
};

console.log(getAnimalSpecies(animalA));

//Una que reciba un animal y devuelva true o false dependiendo de si el animal está extinto o no.

const isAnimalAlive = (animal) => {
  return Object.hasOwn(animal, "extinctionYear");
};
console.log(isAnimalAlive(animalB));
