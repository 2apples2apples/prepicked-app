import "dotenv/config"

const apiKey = process.env.ODDS_API_KEY

if (!apiKey) {
  console.error("Missing ODDS_API_KEY in .env")
  process.exit(1)
}

async function main() {
  try {
    const sportKey = "americanfootball_nfl"
    const res = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sportKey}/odds/?regions=us&markets=h2h,spreads&apiKey=${process.env.ODDS_API_KEY}`
    )

    if (!res.ok) {
      console.error("❌ API request failed:", res.status, res.statusText)
      const text = await res.text()
      console.error(text)
      return
    }

    const data = await res.json()

    data.forEach((data:any) => {
      console.log(`${data.home_team} vs ${data.away_team}`)
      console.log(data.bookmakers)
    })

  } catch (err) {
    console.error("❌ Error fetching odds:", err)
  }
}

import "dotenv/config"

async function checkStatus() {
  const response = await fetch("https://v3.football.api-sports.io/status", {
    headers: {
      "x-apisports-key": process.env.SPORTS_API_KEY!,
    },
  })

  const data = await response.json()
  console.log(data)
}

checkStatus()
main()

async function scores() {

}
