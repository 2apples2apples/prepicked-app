import { GameSummary } from "@/types/interface"
export default function ProGameCard({ game }: { game: GameSummary }) {
  return (
    <div>
      <div className="p-4 border rounded-md bg-white/5 mb-3">
        <h2 className="font-bold text-lg">{game.matchup}</h2>
        <p className="text-sm">Score: {game.score}</p>
        <p className="text-sm">Status: {game.status}</p>
        <p className="text-sm">Spread: {game.spread}</p>
      </div>
    </div>
  )
}
