import { useEffect, useState } from "react";

export default function PokemonCard({ id }) {
  const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState({});

  // Pass Pokemon Id and will update the pokemon object with the required info
  function getPokemon() {
    return fetch(pokemonAPI + id)
      .then((response) => response.json())
      .then((data) =>
        setPokemon({
          id: data.id,
          name: data.name.toUpperCase(),
          sprite: data.sprites.front_default,
        })
      );
  }

  useEffect(() => {
    getPokemon();
  });

  return (
    <div
      key={pokemon.id}
      id={pokemon.id + "-" + pokemon.name + "-card"}
      className="pokemon-card-container"
    >
      <img src={pokemon.sprite}></img>
      <h2>{pokemon.name}</h2>
    </div>
  );
}
