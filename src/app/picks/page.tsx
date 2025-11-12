"use client"
import { GameSummary, NflGameData } from "@/types/interface"
import "dotenv/config"
import { useState } from "react"
import ProGameCard from "../components/FootballGame"


export default function PicksPage() {
  const [ week, setWeek ] = useState("")
  const [ games, setGames ] = useState<GameSummary[]>([])
  console.log(week)

  async function nflScores(selectedWeek: string) {
    try {
      const key = process.env.NEXT_PUBLIC_SPORTS_DATA_IO_KEY
      const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2025REG/${selectedWeek}?key=${key}`)

      const data:NflGameData[] = await response.json()

      const gameSummaries = data.map((g: NflGameData) => ({
        matchup: `${g.HomeTeam} vs ${g.AwayTeam} `,
        score: `${g.HomeScore}-${g.AwayScore}`,
        status: g.Status,
        spread: g.PointSpread,
        homeTeam: g.HomeTeam,
        awayTeam: g.AwayTeam,
        gameKey: g.GameKey,
      }))
      console.log(gameSummaries)
      setGames(gameSummaries)


    } catch (err) {
      console.log(`Error fetching odds:${err}`)
    }
  }

  function handleSubmit() {
    
  }

  return (
    <main
      style={{
        color: "black",
        height: "100vh",
        paddingTop: "100px", // 👈 pushes content below navbar
        zIndex: 10,
        position: "relative",
      }}
    >
      <h1>PLease select the current NFL week below (Not the Week on Stan's sheet)</h1>

      <select name="nfl-week" value={week} onChange={e => {
        const selectedWeek = e.target.value
        setWeek(selectedWeek)
        nflScores(selectedWeek)
      }

      }>
        <option value="">Select a week</option>
        {[ ...Array(18) ].map((_, i) =>
          <option key={i} value={i + 1}>
            Week {i + 1}
          </option>)}
      </select>
      {week && (
        <div>
          <p>Selected week: {week}</p>
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4">NFL Week {week} Scores</h1>
            <form>
              {games.map((g, i) => (
                <ProGameCard key={i} game={g} />
              ))}
              <button
                type="submit"
                className="mt-4 px-3 py-2 bg-blue-600 text-white rounded"
              >
                Submit All Picks
              </button>
            </form>

          </div>
        </div>
      )}
    </main>

  )
}
