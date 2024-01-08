const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');

const apiKey = '0hTg9E2pkAZ/SXJhFapa3A==tJh5IBlmfaUViG9H';
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

async function getJoke() {
  try {
    joke.textContent = 'Updating...';
    jokeButton.textContent = 'Loading...';
    jokeButton.disabled = true;

    const response = await fetch(apiURL, options);
    const data = await response.json();

    jokeButton.disabled = false;
    jokeButton.textContent = 'Tell me a joke';
    joke.textContent = data[0].joke;
  } catch (error) {
    joke.textContent = 'Try again later';
    jokeButton.disabled = false;
    jokeButton.textContent = 'Tell me a joke';
  }
}

jokeButton.addEventListener('click', getJoke);
