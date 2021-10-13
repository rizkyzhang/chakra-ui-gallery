import React from "react";

import { chakra, Box, Heading, Stack, Text } from "@chakra-ui/react";

const CardContent = ({ contents }) => (
  <Box
    width={{ lg: "50%" }}
    paddingY={{ base: 10, lg: 14 }}
    paddingLeft={{ base: 10, lg: 14 }}
    paddingRight={{ base: 10, lg: 32 }}
    bgColor="hsl(244, 38%, 16%)"
    borderTopLeftRadius={{ lg: "lg" }}
    borderBottomRightRadius={{ base: "lg", lg: 0 }}
    borderBottomLeftRadius="lg"
    textAlign={{ base: "center", lg: "left" }}
  >
    <Heading
      as="h2"
      marginBottom={5}
      color="hsl(0, 0%, 100%)"
      fontSize={{ base: "2xl", lg: "3xl" }}
    >
      Get <chakra.span color="hsl(277, 64%, 61%)">insights</chakra.span> that
      help your business grow.
    </Heading>

    <Text
      marginBottom={{ base: 10, lg: 16 }}
      color="hsla(0, 0%, 100%, 0.75)"
      fontSize="sm"
    >
      Discover the benefits of data analytics and make better decisions
      regarding revenue, customer experience, and overall efficiency.
    </Text>

    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: 5, lg: 10 }}
    >
      {contents.map((content, i) => (
        <Stack key={i} spacing={1}>
          <Heading as="h3" color="hsl(0, 0%, 100%)" fontSize="2xl">
            {content.statHeading}
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.6)" fontSize="xs">
            {content.statValue}
          </Text>
        </Stack>
      ))}
    </Stack>
  </Box>
);
export default CardContent;
