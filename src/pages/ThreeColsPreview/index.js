import React from "react";

import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

import "./index.css";

import Sedans from "./images/icon-sedans.svg";
import Luxury from "./images/icon-luxury.svg";
import SUVs from "./images/icon-suvs.svg";

const contents = [
  {
    title: "SEDANS",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bgColor: "hsl(31, 77%, 52%)",
    icon: Sedans,
  },
  {
    title: "SUVS",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "hsl(184, 100%, 22%)",
    icon: Luxury,
  },
  {
    title: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: "hsl(179, 100%, 13%)",
    icon: SUVs,
  },
];

const ThreeColsPreview = () => (
  <Container
    minWidth="100%"
    minHeight="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    padding={5}
    bgColor="hsl(0, 0%, 95%)"
    color="white"
    fontFamily="Lexend Deca"
  >
    <Flex
      direction={{ base: "column", lg: "row" }}
      maxWidth={{ base: "xs", lg: "5xl" }}
      borderRadius="lg"
    >
      {contents.map((content, i) => (
        <Flex
          key={i}
          direction="column"
          alignItems="flex-start"
          bgColor={content.bgColor}
          borderTopLeftRadius={i === 0 ? { base: "lg" } : ""}
          borderTopRightRadius={
            i === 0 ? { base: "lg", lg: 0 } : i === 2 ? { lg: "lg" } : ""
          }
          borderBottomLeftRadius={
            i === 0 ? { lg: "lg" } : i === 2 ? { base: "lg", lg: 0 } : ""
          }
          borderBottomRightRadius={i === 2 ? { base: "lg" } : ""}
          padding={10}
          paddingRight={{ lg: 20 }}
        >
          <Image w={20} src={content.icon} marginBottom={{ base: 7, lg: 10 }} />
          <Heading
            as="h2"
            marginBottom={{ base: 7, lg: 10 }}
            color="hsl(0, 0%, 95%)"
            fontFamily="Big Shoulders Display"
            fontSize="5xl"
          >
            {content.title}
          </Heading>
          <Text
            marginBottom={{ base: 7, lg: 28 }}
            color="hsla(0, 0%, 100%, 0.75)"
          >
            {content.description}
          </Text>
          <Spacer />
          <Button
            size="lg"
            rounded="full"
            bgColor="hsl(0, 0%, 95%)"
            color={content.bgColor}
            font="inherit"
            fontWeight="normal"
            _hover={{
              border: "2px solid white",
              bgColor: "transparent",
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default ThreeColsPreview;
