import { Ranking } from './ranking';

export interface Player{
    name:String,
    surname:String,
    country:String,
    elo:Ranking
}