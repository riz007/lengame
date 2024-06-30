import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getResizedImageUrl from "../services/image-resize";
import Emoji from "./Emoji";
import { IGame } from "../types/interface";
import { useNavigate } from "react-router-dom";

interface Props {
  game: IGame;
}
const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      cursor="pointer"
      _hover={{
        border: "2px solid",
        borderColor: "purple.500",
      }}
      onClick={() => navigate(`/game/${game.id}`)}>
      <Image src={getResizedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
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
