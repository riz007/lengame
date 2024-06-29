import genres from "../data/genre";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});
export default useGenres;
