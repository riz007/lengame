import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
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
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          focusBorderColor="green.400"
          fontSize="2xl"
          _placeholder={{ opacity: 1, color: "gray.100" }}
          variant="outline"
          size="lg"
          width="50%"></Input>
      </InputGroup>
    </form>
  );
};
export default SearchInput;
