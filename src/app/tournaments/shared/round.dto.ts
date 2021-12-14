import { BracketDto } from "./bracket.dto";
import { TournamentDto } from "./tournament.dto";

export interface RoundDto {
  id: number;
  name: string;
  brackets: BracketDto[];
  tournamentId: number;
  tournament: TournamentDto;
}
