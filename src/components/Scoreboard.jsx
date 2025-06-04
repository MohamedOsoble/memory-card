export default function Scoreboard({ score, bestScore }) {
  return (
    <div key="scoreboard" id="scoreboard">
      <h2 className="score">Current Score: {score}</h2>
      <h2 className="score">Best Score: {bestScore}</h2>
    </div>
  );
}
