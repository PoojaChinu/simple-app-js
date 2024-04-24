// Creating a new varibale
let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"] },
  { name: "Caterpie", height: 0.3, types: ["Rock", "Fire"] },
  { name: "Butterfree", height: 1.1, types: ["Ice", "Fly"] },
  { name: "Pikachu", height: 0.4, types: ["Flying", "Electric"] },
  { name: "Pidgey", height: 0.3, types: ["Rock", "Ground"] },
];
// For loops to iterate over each item
for (i = 0; i < pokemonList.length; i++) {
  // print the message if height is above the certain value
  if (pokemonList[i].height > 1.0) {
    document.write(
      pokemonList[i].name +
        " (height: " +
        pokemonList[i].height +
        ")" +
        "-" +
        "Wow, that’s big!" +
        "<br/>"
    );
  } else {
    // print the pokemaon name with their height
    document.write(
      pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br/>"
    );
  }
}
