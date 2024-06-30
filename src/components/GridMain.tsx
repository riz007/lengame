import { Box, Flex } from "@chakra-ui/react";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameGrid from "./GameGrid";
import { useGameQuery } from "../context/useGameQuery";

const GridMain = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};
export default GridMain;
