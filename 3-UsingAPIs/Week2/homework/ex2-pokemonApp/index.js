'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // return fetch(url)
  //   .then((response) => response.json())
  //   .catch((err) => console.error('[Fetch Error]:', err));

  const response = await fetch(url);
  return response.json();
}

async function fetchAndPopulatePokemons(url) {
  try {
    const response = await fetchData(url);
    const creatingSelect = document.createElement('select');
    creatingSelect.classList.add('selectStyling');
    document.body.appendChild(creatingSelect);
    for (const result of response) {
      response.forEach;
      const option = document.createElement('option');
      option.value = result.url;
      option.text = result.name;
      creatingSelect.appendChild(option);
    }
  } catch (error) {
    console.error(error);
  }
}

function fetchImage(data) {
  const image = document.createElement('img');
  image.src = data['img'];
  document.body.appendChild(image);
  console.log(data);
}

async function main() {
  fetchAndPopulatePokemons('https://xkcd.now.sh/?comic=latest');

  // try {
  //   const responseOfRequest = await fetchData(
  //     'https://xkcd.now.sh/?comic=latest'
  //   );
  //   console.log(responseOfRequest);
  //   renderImage(responseOfRequest);
  // } catch (error) {
  //   const errorInformation = `${error.message} - code: ${error.code} - status: ${error.status}`;
  //   renderError(errorInformation);
  //   console.error(error.status);
  // }
}

window.addEventListener('load', main);
