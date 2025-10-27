export interface Outcome {
  name: string
  price: number
  point?: number
}

export interface Market {
  key: string
  outcomes: Outcome[]
}

export interface Bookmaker {
  key: string // e.g. "draftkings"
  title: string // e.g. "DraftKings"
  markets: Market[]
}

export interface Games {
  id: string,
  sport_key: string,
  sport_title: string,
  commence_time: string,
  home_team: string,
  away_team: string
  bookmakers: [
    string
  ],
}

