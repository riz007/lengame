import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchInput: (searchText: string) => void;
}

const SearchInput = ({ onSearchInput }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchInput(ref.current.value);
      }}>
      <InputGroup>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          focusBorderColor="purple.500"
          fontSize="2xl"
          _placeholder={{ opacity: 1, color: "gray.100" }}
          variant="outline"
          size="lg"
          width="50%"></Input>
        <InputRightAddon
          fontSize={20}
          blockSize="auto"
          bgColor="purple.500"
          children={<BsSearch />}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
