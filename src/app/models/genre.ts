export interface Genre {
  readonly mal_id: number;
  readonly name: string;
  readonly type: GenreType;
  readonly url: string;
}
declare enum GenreType {
  Anime = 'anime'
}
