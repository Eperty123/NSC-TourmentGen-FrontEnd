import { TournamentType } from "./tournamenttype";

export interface TournamentDto {
  id: number;
  name: string;
  type: TournamentType;
  participants: string;
}
