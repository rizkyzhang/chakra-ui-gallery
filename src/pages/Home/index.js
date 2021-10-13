import React from "react";

import {
  Container,
  SimpleGrid,
  Flex,
  Box,
  Image,
  Button,
  Heading,
  Text,
  Link,
  chakra,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

import Projects from "./projects.json";

function Home() {
  return (
    <Container maxWidth="full" p={7} fontFamily="Nunito, sans-serif">
      <Heading as="h1" fontSize={35} color="blue.400" textAlign="center" mb={7}>
        Chakra UI Projects
      </Heading>
      <SimpleGrid minChildWidth={300} spacing={10} justifyItems="center">
        {Projects.map((project) => (
          <Box
            maxWidth="xs"
            bgColor="white"
            borderRadius="lg"
            boxShadow="dark-lg"
            fontSize="sm"
          >
            <Image
              src={project.image}
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
            />
            <Flex
              alignItems="center"
              direction="column"
              p={5}
              textAlign="center"
            >
              <Heading as="h2" fontSize={22} mb={5}>
                {project.name}
              </Heading>
              <Text mb={2}>
                <chakra.span
                  bgGradient="linear-gradient(45deg, #ffb74d, #fc5857)"
                  bgClip="text"
                  fontFamily="Dancing Script"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  designed
                </chakra.span>{" "}
                by{" "}
                <Link
                  href={project.designLink}
                  color="blue.400"
                  fontWeight="bold"
                >
                  {project.designer}
                </Link>
              </Text>
              <Text mb={5}>Completed at {project.completedAt}</Text>
              <Button
                as={ReactLink}
                to={project.projectLink}
                bgColor="blue.400"
                color="white"
                font="inherit"
                isFullWidth
                _hover={{ boxShadow: "dark-lg" }}
              >
                View
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Home;
