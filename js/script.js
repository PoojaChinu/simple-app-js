// creating new pokemonRepository variable and assign it to IIFE
let pokemonRepository = (function () {
  // Creating a new varibale
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"] },
    { name: "Caterpie", height: 0.3, types: ["Rock", "Fire"] },
    { name: "Butterfree", height: 1.1, types: ["Ice", "Fly"] },
    { name: "Pikachu", height: 0.4, types: ["Flying", "Electric"] },
    { name: "Pidgey", height: 0.3, types: ["Rock", "Ground"] },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();
// add a new object to pokemon list
pokemonRepository.add({
  name: "Squirtle",
  height: 0.5,
  types: ["water", "ice"],
});
// using ForEach to iterate over each item
pokemonRepository.getAll().forEach(function (pokemon) {
  // print the message if height is above the certain value
  if (pokemon.height > 1.0) {
    document.write(
      pokemon.name +
        " (height: " +
        pokemon.height +
        ")" +
        "-" +
        "Wow, that’s big!" +
        "<br/>"
    );
  } else {
    // print the pokemaon name with their height
    document.write(
      pokemon.name + " (height: " + pokemon.height + ")" + "<br/>"
    );
  }
});
