const peopleButton = document.getElementById("peopleButton");


peopleButton.addEventListener("click", function (event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log("star wars data", data.results)
      var starWarsPeople = data.results.map((person) => {
        return `<div>
            <ol>
            <li>Name: ${person.name}</li>
            <li>Birth Year: ${person.birth_year}</li>
            <li>Height: ${person.height}</li>
            <li>Gender: ${person.gender}</li>
            </ol>
            </div>`;
      });
      document.getElementById("data").innerHTML = starWarsPeople;
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
      // console.log("star wars data", data.results)
      var planets = data.results.map((planet) => {
        return `<div>
            <ul>
            <li>Name: ${planet.name}</li>
            <li>Diamater: ${planet.diameter}</li>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            </ul>
            </div>`;
      });
      document.getElementById("data").innerHTML = planets;
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
      // console.log("star wars data", data.results)
      var starships = data.results.map((ship) => {
        return `<div>
            <ol>
            <li>Name: ${ship.name}</li>
            <li>Birth Year: ${ship.model}</li>
            <li>Height: ${ship.manufacturer}</li>
            <li>Gender: ${ship.passengers}</li>
            </ol>
            </div>`;
      });
      document.getElementById("data").innerHTML = starships;
    });
});
