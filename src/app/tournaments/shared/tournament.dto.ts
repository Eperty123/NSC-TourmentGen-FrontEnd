import { UserDto } from "../../users/shared/user.dto";
import { RoundDto } from "./round.dto";
import { TournamentUserDto } from "./tournamentuser.dto";

export interface TournamentDto {
  id: number;
  name: string;
  tournamentUsers: TournamentUserDto[];
  rounds: RoundDto[];
  userId: number;
  user: UserDto;
  currentRoundId: number;
}
