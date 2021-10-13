import React from "react";

import { Box, Image } from "@chakra-ui/react";

import Hero from "../../image-header-mobile.jpg";

const CardImage = () => (
  <Box
    width={{ lg: "50%" }}
    bgColor="hsl(277, 64%, 61%)"
    borderTopLeftRadius={{ base: "lg", lg: 0 }}
    borderTopRightRadius="lg"
    borderBottomRightRadius={{ lg: "lg" }}
  >
    <Image src={Hero} height="100%" mixBlendMode="multiply" />
  </Box>
);

export default CardImage;
