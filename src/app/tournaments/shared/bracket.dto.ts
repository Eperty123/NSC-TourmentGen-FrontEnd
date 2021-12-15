import { ParticipantDto } from "./participant.dto";
import { RoundDto } from "./round.dto";

export interface BracketDto {
  id: number;
  participant1Id: number;
  participant1: ParticipantDto;
  participant2Id: number;
  participant2: ParticipantDto;
  roundId: number;
  round: RoundDto;
  winnerId: number;
}
