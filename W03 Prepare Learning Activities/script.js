const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    console.log('Total Pokémon count: ', data.count); 
    console.log('Next URL: ', data.next);             
    doStuff(data);                                  
  })
  .catch(error => console.error('Error fetching data:', error));

function doStuff(data) {
  const results = data.results;
  const pokemonList = document.getElementById('pokemonList');

  results.forEach(pokemon => {
    const option = document.createElement('option');
    option.textContent = pokemon.name;
    pokemonList.appendChild(option);
  });

  console.log('first: ', results);
}