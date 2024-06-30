export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  searchText: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}

export interface IEsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface IGenreDetails {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

export interface IGameDetails extends IGame {
  name_original: string;
  description_raw: string;
  released: string;
  website: string;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  esrb_rating: IEsrbRating;
  background_image_additional: string;
  genres: IGenreDetails[];
}
