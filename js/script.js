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

  // funtion to add pokemon in the pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // function to get the pokemonlist
  function getAll() {
    return pokemonList;
  }

  // creating new function showDetails() within IIFE
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // creating new function addListItem() within IIFE
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    // adding an event Listner to the button
    button.addEventListener("click", function showDetails() {
      console.log(pokemon);
    });

    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
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
  pokemonRepository.addListItem(pokemon);
});
