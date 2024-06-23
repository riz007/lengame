import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getResizedImageUrl from "../services/image-resize";

interface Props {
  game: IGame;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getResizedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;