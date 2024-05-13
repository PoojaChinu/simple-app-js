// creating new pokemonRepository variable and assign it to IIFE
let pokemonRepository = (function () {
  // Creating a new varibale
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // funtion to add pokemon in the pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // function to get the pokemonlist
  function getAll() {
    return pokemonList;
  }

  // creating new function addListItem() within IIFE
  function addListItem(pokemon) {
    let pokemonList = document.querySelector("#pokemon-list");
    let listPokemon = document.createElement("li");

    let button = document.createElement("button");
    button.innerText = pokemon.name.toUpperCase();
    button.classList.add("button-class");
    button.classList.add("btn");
    button.setAttribute("data-toggle", "modal");

    // adding an event Listner to the button
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  //creating a promise function which loads a list of pokemon
  function loadList() {
    // runs a fetch method
    return (
      fetch(apiUrl)
        // result of this would be a response
        .then(function (response) {
          // This returns a promise
          return response.json();
        })
        .then(function (json) {
          // console.log(json.results);
          // take this json and run a For Each Loop on this
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });

          // console.log(pokemonList);
        })
        .catch(function (e) {
          console.error(e);
        })
    );
  }

  // Load details of the pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // loading the pokemon details from API instead of static data
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }
  //Shows the modal for Pokemon
  function showModal(item) {
    console.log("start of show model", item);
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    // let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    // creating element for the name in modal content
    let nameElement = $("<h1>" + item.name + "</h1>");

    // creating image in the modal content
    let imgElement = $('<img class= "modal-img" style="width:50%">');
    imgElement.attr("src", item.imageUrl);

    // creating element for the height
    let heightElement = $("<p>" + "Height: " + item.height + "</p>");

    //creating elements for types in modal content
    let typesElement = $("<p>" + "Types: " + item.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imgElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    console.log("End of show model");
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

// Now the data is loaded!
pokemonRepository.loadList().then(function () {
  // using ForEach to iterate over each item
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
