import { Image, ImageProps } from "@chakra-ui/react";
import arrow from "../assets/arrow.png";
import like from "../assets/like.png";
import meh from "../assets/meh.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: like, alt: "recommended", boxSize: "25px" },
    5: { src: arrow, alt: "exceptional", boxSize: "35px" },
  };
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginY={1} />;
};
export default Emoji;
