import { ReactNode, createContext, useState } from "react";
import { IGameQuery } from "../types/interface";

interface IGameQueryProviderProps {
  children: ReactNode;
}

export const GameQueryContext = createContext<
  | {
      gameQuery: IGameQuery;
      setGameQuery: React.Dispatch<React.SetStateAction<IGameQuery>>;
    }
  | undefined
>(undefined);

export const GameQueryProvider = ({ children }: IGameQueryProviderProps) => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
};
