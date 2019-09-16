import { Ranking } from './ranking';

export interface Player {
    name: String,
    surname: String,
    country: String,
    image: String,
    ranking: Ranking
}