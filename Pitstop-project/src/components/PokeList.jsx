import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "./PokeCard";

function PokeList() {
  // 1 - com 2 promises, exemplo academico
  //   function getPokemon() {
  //     const promiseResponse = fetch("https://pokeapi.co/api/v2/pokemon");

  //     promiseResponse.then(function (response) {
  //       const promiseJSONResult = response.json();
  //       promiseJSONResult.then(function (result) {
  //         console.log(result);
  //       });
  //     });

  //     console.log("Hello");
  //   }

  //   2 - a usar promise chaining, em que o callback do primeito then retorna outra promise
  //   function getPokemon() {
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setPokeList(result.results);
  //       });
  //   }

  // 3 - async/await
  async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();

    setPokeList(result.results);
    console.log(result);
  }

  const [pokeList, setPokeList] = useState(undefined);

  useEffect(function () {
    getPokemon();
  }, []);

  return (
    <>
      {pokeList ? (
        pokeList.map((pokemon) => (
          <>
            <PokeCard url={pokemon.url} />
          </>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default PokeList;
