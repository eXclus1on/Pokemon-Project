import { useEffect, useState } from "react";

function PokeCard({ url }) {
  async function getPokemonInfo() {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    setPokemonInfo(result);
  }

  const [pokemonInfo, setPokemonInfo] = useState();
  useEffect(function () {
    getPokemonInfo();
  }, []);

  return (
    <div className="pokemonCard">
      {pokemonInfo ? (
        <>
          <div>Name: {pokemonInfo.name} </div>
          <div>Weight: {pokemonInfo.weight}</div>
          <div>
            <img src={pokemonInfo.sprites.front_default} />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PokeCard;
