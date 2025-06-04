import { useEffect, useState } from "react";
import PokemonCard from "./Card";
import Scoreboard from "./Scoreboard";

export default function Game() {
  const [idList, setIdList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const selection = new Set();

    while (selection.size < 15) {
      const randomNumber = Math.floor(Math.random() * 151) + 1;
      selection.add(randomNumber);
    }
    setIdList([...selection]);
  }, []);

  function handleClick(e) {
    const id = e.currentTarget.getAttribute("id");
    if (checkClicked(id)) {
      setScore(0);
      setSelected([]);
      shuffleGrid(idList);
    } else {
      // Add to selected ID's and shuffle Grid
      setSelected([...selected, id]);
      shuffleGrid(idList);

      // Update current score and check Best score
      let newScore = score + 1;
      setScore(newScore);
      checkBestScore(newScore);
    }
  }

  function checkClicked(id) {
    return selected.includes(id);
  }

  function checkBestScore(currentScore = score) {
    if (currentScore > bestScore - 1) {
      setBestScore(currentScore);
    }
  }

  function shuffleGrid(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setIdList(array);
  }

  return (
    <div id="game">
      <div key="game-title" id="game-title">
        <h1 className="game-title">Pokemon Memory Game</h1>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
      <div key="game-grid" className="pokemon-grid">
        {idList.map((id) => {
          return (
            <PokemonCard key={id} id={id} handleClick={(e) => handleClick(e)} />
          );
        })}
      </div>
    </div>
  );
}
