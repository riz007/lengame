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
