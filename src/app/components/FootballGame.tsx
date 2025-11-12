import { GameSummary } from "@/types/interface";


export default function ProGameCard({ game, displaySpread = true }: { game: GameSummary; displaySpread?: boolean }) {
  return (
    <div>
      <div className="p-4 border rounded-md bg-white/5 mb-3">
        <h2 className="font-bold text-lg">{game.matchup}</h2>
        <p className="text-sm">Score: {game.score}</p>
        <p className="text-sm">Status: {game.status}</p>
        <p>key {game.gameKey}</p>
        {displaySpread ? (<><label>
          select: {game.homeTeam} spread {Math.ceil(game.spread)}<input type="radio" name={game.gameKey}></input>
        </label>
        <label>
          select: {game.awayTeam} spread {Math.ceil(game.spread * -1)}<input type="radio" name={game.gameKey}></input>
        </label></>) : null}
      </div>
    </div>
  )
}
{ /* use a radio for the buttons*/ }
