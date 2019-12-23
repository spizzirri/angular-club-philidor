import { Ranking } from './ranking';
import { ChessCoin } from './chess-coin';

export interface Player {
    name: string,
    surname?: String,
    country?: String,
    image?: String,
    ranking?: Ranking,
    chesscoin?: ChessCoin
}