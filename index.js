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

const isAnimalAlive = (animal) => {
  return Object.hasOwn(animal, "extinctionYear");
};
console.log(isAnimalAlive(animalB));

const getAnimalInfo = (animal) => {
  return `El amimal ${animal.name} es un ${animal.species} de ${animal.age} años de edad y pesa ${animal.weight} kg`;
};

console.log(getAnimalInfo(animalB));
