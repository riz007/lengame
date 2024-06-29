import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchInput: (searchText: string) => void;
}

const NavBar = ({ onSearchInput }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearchInput={onSearchInput} />
      <ColorSwitch />
    </HStack>
  );
};
export default NavBar;
