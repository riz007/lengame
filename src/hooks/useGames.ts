import { IGame, IGameQuery } from "../types/interface";
import useData from "./useData";

const useGames = (gameQuery: IGameQuery) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGames;
