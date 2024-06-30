import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGameById from "../hooks/useGameById";
import {
  Box,
  Button,
  Collapse,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGameById(id!);
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  if (isLoading) {
    return (
      <Box>
        <Button onClick={() => navigate("/")}>Back</Button>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4} mt={4}>
          <GridItem>
            <Skeleton height="400px" width="100%" />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Box ml={{ base: 0, md: 4 }} width={{ base: "100%", md: "60%" }}>
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Box>
      <Button onClick={() => navigate("/")}>Back</Button>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4} mt={4}>
        <GridItem>
          {data && (
            <Image
              src={data.background_image_additional}
              alt={data.name}
              width="100%"
              maxHeight="400px"
              objectFit="cover"
            />
          )}
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          {data && (
            <Box ml={{ base: 0, md: 4 }} width={{ base: "100%", md: "60%" }}>
              <Text fontSize="2xl" fontWeight="bold" mb={5}>
                {data.name_original}
              </Text>
              <Collapse startingHeight={80} in={isExpanded}>
                <Text mb={2}>{data.description_raw}</Text>
              </Collapse>
              {!isExpanded && (
                <Button onClick={toggleAccordion} variant="link" mt={2}>
                  ... Read more
                </Button>
              )}
              {isExpanded && (
                <Button onClick={toggleAccordion} variant="link" mt={2}>
                  Show less
                </Button>
              )}
              <Text mt={2}>Release Date: {data.released}</Text>
              {data.genres.length > 0 && (
                <Text mt={2}>
                  Genre: {data.genres.map((genre) => genre.name).join(", ")}
                </Text>
              )}
              {data.website && (
                <Text mt={2}>
                  Website:{" "}
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.website}
                  </a>
                </Text>
              )}
            </Box>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GameDetails;
