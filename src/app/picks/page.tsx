"use client"

import { NflGameData } from "@/types/interface"
import "dotenv/config"
import { useState } from "react"


export default function PicksPage() {
  const [ week, setWeek ] = useState("")
  console.log(week)

  async function nflScores(selectedWeek: string) {
    try {
      const key = process.env.NEXT_PUBLIC_SPORTS_DATA_IO_KEY
      const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2025REG/${selectedWeek}?key=${key}`)

      const data = await response.json()

      const gameSummaries = data.map((g: NflGameData) => ({
        matchup: `${g.HomeTeam} vs ${g.AwayTeam} `,
        score: `${g.HomeScore}-${g.AwayScore}`,
        status: g.Status,
        spread: g.PointSpread,
      }))
      console.log(gameSummaries)
    } catch (err) {
      console.log(`Error fetching odds:${err}`)
    }
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
    </main>
  )
}
