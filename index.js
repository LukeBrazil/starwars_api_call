const characterButton = document.getElementById("characterButton");
const planetButton = document.getElementById("planetButton");
const starshipButton = document.getElementById("starshipButton");

characterButton.addEventListener("click", function (event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var characters = data.results.map((character) => {
        return `<div>
                <ul>
                    <li>Name: ${character.name}</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                </ul>
            </div>`;
      });
      document.getElementById('output').innerHTML = characters;
    });
});

planetButton.addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://swapi.dev/api/planets";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var planets = data.results.map((planet) => {
          return `<div>
                  <ul>
                      <li>Name: ${planet.name}</li>
                      <li>Diameter: ${planet.diameter}</li>
                      <li>Climate: ${planet.climate}</li>
                      <li>Population: ${planet.population}</li>
                  </ul>
              </div>`;
        });
        document.getElementById('output').innerHTML = planets;
      });
  });
  
starshipButton.addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://swapi.dev/api/starships";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var starship = data.results.map((ship) => {
          return `<div>
                  <ul>
                      <li>Name: ${ship.name}</li>
                      <li>Manufacturer: ${ship.manufacturer}</li>
                      <li>Passengers: ${ship.passengers}</li>
                      <li>Hyper Drive Rating: ${ship.hyperdrive_rating}</li>
                  </ul>
              </div>`;
        });
        document.getElementById('output').innerHTML = starship;
      });
  });
  