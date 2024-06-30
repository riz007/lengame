import { Box, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={2}>
        404
      </Heading>
      <Text fontSize="xl" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"}>
        The page you're looking for does not seem to exist.
      </Text>
    </Box>
  );
};

export default NotFound;
