import React from "react";
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Image,
  Heading,
  Button,
  Circle,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/icons";
import { FaMusic } from "react-icons/fa";

import Hero from "./images/illustration-hero.svg";
import Desktop from "./images/pattern-background-desktop.svg";

function App() {
  return (
    <>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="full"
        height="100vh"
        bgImage={Desktop}
        bgColor="hsl(225, 100%, 94%)"
        bgPosition="top"
        bgRepeat="no-repeat"
        fontFamily="Red Hat Display, sans-serif"
      >
        <Box
          maxWidth="xs"
          bgColor="white"
          borderRadius="lg"
          boxShadow="2xl"
          fontSize="sm"
        >
          <Image
            src={Hero}
            mb={5}
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
          />
          <Flex alignItems="center" direction="column" p={5} textAlign="center">
            <Heading mb={4} fontSize="xl">
              Order Summary
            </Heading>
            <Text mb={8} color="gray.500">
              You can now listen to millions of songs, audiobooks, and podcast
              on any device anywhere you like!
            </Text>

            <HStack mb={8} spacing={5}>
              <Circle size={10} bg="hsl(225, 100%, 94%)" color="gray.500">
                <Icon as={FaMusic}></Icon>
              </Circle>
              <VStack spacing={0}>
                <Text fontWeight="bold">Annual Plan</Text>
                <Text color="gray.500">$59.99/year</Text>
              </VStack>
              <Spacer></Spacer>
              variant="link"
              <Button variant="link" color="blue" fontSize="xs">
                Change
              </Button>
            </HStack>

            <Button
              mb={4}
              bg=" hsl(245, 75%, 52%)"
              boxShadow="2xl"
              color="white"
              fontSize="inherit"
              _hover={{ boxShadow: "dark-lg" }}
              isFullWidth
            >
              Proceed to Payment
            </Button>
            <Button variant="ghost" fontSize="xs">
              Cancel Order
            </Button>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default App;
