import React from "react";

import { Container, Flex } from "@chakra-ui/react";

import CardImage from "./components/CardImage";
import CardContent from "./components/CardContent";

import "./index.css";

const contents = [
  { statHeading: "10k+", statValue: "COMPANIES" },
  {
    statHeading: "314",
    statValue: "TEMPLATES",
  },
  {
    statHeading: "12M+",
    statValue: "QUERIES",
  },
];

const StatsPreview = () => {
  return (
    <Container
      minWidth="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={5}
      bgColor="hsl(233, 47%, 7%)"
      fontFamily="Inter"
    >
      <Flex
        direction={{ base: "column", lg: "row-reverse" }}
        maxWidth={{ base: "xs", lg: "5xl" }}
      >
        <CardImage />
        <CardContent contents={contents} />
      </Flex>
    </Container>
  );
};

export default StatsPreview;
