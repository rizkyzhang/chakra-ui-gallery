import React from "react";

import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import "./index.css";

import AvatarImage from "./images/image-victor.jpg";
import CardBg from "./images/bg-pattern-card.svg";

const ProfileCard = () => (
  <Container
    minW="100%"
    minH="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bg="hsl(185, 75%, 39%)"
    fontFamily="Kumbh Sans"
    fontWeight="bold"
  >
    <Flex
      maxW="xs"
      direction="column"
      align="center"
      bg="white"
      borderRadius="xl"
      shadow="lg"
    >
      <Box position="relative" mb={16}>
        <Image src={CardBg} borderTopRadius="xl"></Image>
        <Avatar
          src={AvatarImage}
          size="xl"
          position="absolute"
          transform="translateX(-50%)"
          left="50%"
          bottom="-35%"
          border="3px solid white"
        ></Avatar>
      </Box>

      <Stack direction="row" mb={1}>
        <Text>Victor Crest</Text>
        <Text color="hsl(0, 0%, 59%)">26</Text>
      </Stack>
      <Text color="hsl(0, 0%, 59%)" mb={6} fontSize="sm">
        London
      </Text>

      <Divider></Divider>

      <Flex w="full" py={6} justifyContent="space-evenly" textAlign="center">
        <Box>
          <Text fontSize="md">80K</Text>
          <Text fontSize="xs" color="hsl(0, 0%, 59%)">
            Followers
          </Text>
        </Box>
        <Box>
          <Text fontSize="md">804K</Text>
          <Text fontSize="xs" color="hsl(0, 0%, 59%)">
            Likes
          </Text>
        </Box>
        <Box>
          <Text fontSize="md">1.4K</Text>
          <Text fontSize="xs" color="hsl(0, 0%, 59%)">
            Photos
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Container>
);

export default ProfileCard;
