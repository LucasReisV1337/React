import "./GameOver.css"

const GameOver = ({ retry , score}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <span>prontuação: {score}</span>
      <br />
      <br/>
      <button onClick={retry}>Reinicie o jogo</button>
    </div>
  )
}

export default GameOver