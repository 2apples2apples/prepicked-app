import "dotenv/config"

async function nflScores() {
  try {
    const key = process.env.NEXT_PUBLIC_SPORTS_DATA_IO_KEY
    const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2025REG/7?key=${key}`)

    const data = await response.json()
    // console.log(data)

    // const gameSummaries = data.map((g: NflGameData) => ({
    //   matchup: `${g.HomeTeam} vs ${g.AwayTeam} `,
    //   score: `${g.HomeScore}-${g.AwayScore}`,
    //   status: g.Status,
    //   spread: g.PointSpread,
    // }))

    console.log(data)
  } catch (err) {
    console.error("Error fetching odds:", err)
  }
}
nflScores()

