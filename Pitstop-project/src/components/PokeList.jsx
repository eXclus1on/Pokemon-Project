function PokeList() {
  function getPokemon() {
    const promiseResponse = fetch("https://pokeapi.co/api/v2/pokemon");

    promiseResponse.then(function (response) {
      console.log("response.json");
    });
    console.log("Hello");
  }

  return (
    <>
      <button onClick={getPokemon}>Get Pokemon</button>
      <ul>
        <li>Pikachu</li>
        <li>Squirtel</li>
        <li>Charmander</li>
      </ul>
    </>
  );
}

export default PokeList;
