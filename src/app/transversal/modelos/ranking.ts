import { ELO } from './elo';

export interface Ranking {
    classic: ELO,
    rapid: ELO,
    blitz: ELO
}