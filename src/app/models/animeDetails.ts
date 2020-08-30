import {AnimeType, Source} from './anime';
import {Genre} from './genre';

export interface AnimeDetails {
  readonly request_hash: string;
  readonly request_cached: boolean;
  readonly request_cache_expiry: number;
  readonly mal_id: number;
  readonly url: string;
  readonly image_url: string;
  readonly trailer_url: string;
  readonly title: string;
  readonly title_english: string;
  readonly title_japanese: string;
  readonly title_synonyms: string[];
  readonly type: AnimeType;
  readonly source: Source;
  readonly episodes: number;
  readonly status: string;
  readonly airing: boolean;
  readonly aired: { from: string, to: string, string: string };
  readonly duration: string;
  readonly rating: string;
  readonly score: number;
  readonly score_by: string;
  readonly genres: Genre[];
  readonly rank: number;
  readonly popularity: number;
  readonly members: number;
  readonly favorites: number;
  readonly related: any;
  readonly producers: Genre[];
  readonly opening_themes: string[];
  readonly ending_themes: string[];
  readonly licensors: any[];
  readonly studios: Genre[];
  readonly synopsis: string;
}
