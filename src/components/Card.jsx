import PokemonCard from "./PokemonAPI";

export default function Cards() {
  let requiredPokemon = [];
  // Function creates a list of random pokemon ID's to be used. Currently takes no input for list length and is limited to Gen 1 (1 - 151)
  // Can be amended to take input and remove min max and n
  function generateIdList() {
    const min = 1;
    const max = 151;
    const n = 15;
    while (requiredPokemon.length < n) {
      let int = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!requiredPokemon.includes(int)) {
        requiredPokemon.push(int);
      }
    }
    return requiredPokemon;
  }

  generateIdList();

  return (
    <div>
      {requiredPokemon.map((id) => {
        return <PokemonCard id={id} />;
      })}
    </div>
  );
}
