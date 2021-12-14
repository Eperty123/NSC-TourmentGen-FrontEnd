import { UserDto } from "../../users/shared/user.dto";
import { TournamentDto } from "./tournament.dto";

export interface TournamentUserDto {
  id: number;
  userId: number;
  tournamentId: number;
  tournament: TournamentDto;
  user: UserDto;
}
