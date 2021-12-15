import { BracketDto } from "./bracket.dto";

export interface ParticipantDto {
  id: number;
  name: string;
  bracketsParticipants1: BracketDto[];
  bracketsParticipants2: BracketDto[];
}
