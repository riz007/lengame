import { IGameDetails } from "../types/interface";
import useDataSingle from "./useDataSingle";

const useGameById = (id: string) => useDataSingle<IGameDetails>(`/games/${id}`);
export default useGameById;
