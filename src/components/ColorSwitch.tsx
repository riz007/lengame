import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="lg"
      />
      <Text whiteSpace="nowrap">{colorMode === "dark" ? "Light" : "Dark"}</Text>
    </HStack>
  );
};
export default ColorSwitch;
