# Pokémon Repository

This project is a simple web application that displays a list of Pokémon fetched from the PokéAPI. Users can click on a Pokémon to see its details in a modal.

## Features

- Fetches a list of Pokémon from the PokéAPI
- Displays the Pokémon in a styled list
- Shows details of each Pokémon in a modal upon clicking

## Technologies Used

- HTML
- CSS (with Bootstrap)
- Javascript (Basic functions like, DOM, Json, Jquery, UI Patterns, Bootstrap)
- Fetch API

## Getting Started

## Running Locally

To run this project locally, follow these steps:

1. **Clone or Download**: Clone this repository or download it as a ZIP file.

   ```bash
   git clone https://github.com/your-username/simple-app-js.git
   ```

2. Open in Browser:
   - Using IDE: Open the project in your preferred IDE (e.g., Visual Studio Code). Right-click on index.html and select "Open with Live Server" if you have the Live Server extension installed.
   - Directly: Open the index.html file directly in any web browser.

## Usage

Once the project is running, you will see a list of Pokémon. Click on any Pokémon to see its details in a modal.

File Structure

simple-app-js/
├── dist/
│ ├── scripts.dist.js
│ └── styles.dist.css
├── js/
│ ├── fetch-polyfill.js
│ └── promise-polyfill.js

├── index.html
├── README.md
└── src/
├── scripts.js
└── styles.css

## Customization

CSS: Customize the styling in src/styles.css.
JavaScript: Add or modify functionality in src/scripts.js.
Minified Files

The project includes minified versions of CSS and JS files located in the dist directory. These files are referenced in index.html.

## Dependencies

This project uses the following dependencies:

Bootstrap 4.3.1
jQuery 3.3.1
Popper.js 1.14.7
Acknowledgements

PokéAPI for providing the Pokémon data.

# External API project is using to fetch the data

https://pokeapi.co/api/v2/pokemon/?limit=150
