import {Anime} from './anime';

export declare type Seasons = 'summer' | 'spring' | 'fall' | 'winter';
export interface Season {
  readonly anime: Anime[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly season_name: string;
  readonly season_year: number;
};
