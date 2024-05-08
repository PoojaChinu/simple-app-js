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
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
    });
  }
  //Shows the modal for Pokemon
  function showModal(title, height, imageUrl) {
    let modalContainer = document.querySelector("#pokemon-modal-container");

    // Clear all existing modal content
    modalContainer.innerHTML = "";

    // Add the new modal content
    let modal = document.createElement("div");
    modal.classList.add("pokemon-modal");

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("pokemon-modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = title.toUpperCase();

    let contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + height;

    let imgElement = document.createElement("img");
    imgElement.src = imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#pokemon-modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#pokemon-modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

// // add a new object to pokemon list
// pokemonRepository.add({
//   name: "Squirtle",
//   height: 0.5,
//   types: ["water", "ice"],
// });

// Now the data is loaded!
pokemonRepository.loadList().then(function () {
  // using ForEach to iterate over each item
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
