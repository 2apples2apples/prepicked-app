export interface NflGameData {
  week: number;
  AwayTeam: string;
  HomeTeam: string;
  AwayScoreQuarter1: number;
  AwayScoreQuarter2: number;
  AwayScoreQuarter3: number;
  AwayScoreQuarter4: number;
  AwayScoreOvertime: number;
  HomeScoreQuarter1: number;
  HomeScoreQuarter2: number;
  HomeScoreQuarter3: number;
  HomeScoreQuarter4: number;
  HomeScoreOvertime: number;
  AwayScore: number;
  HomeScore: number;
  Status: string;
  PointSpread: number;
  TimeRemaining: string;

}


export interface GameSummary {
  matchup: string;
  score: string;
  stadium: string;
  status: string;
  spread: number
}
