import { UnsplashTopic } from "../models/unsplash/unsplash.model";
import { Button, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

const Header: React.FC<any> = function (props: {
  onClick: () => void;
  topic: UnsplashTopic;
}): any {
  return (
    <header>
      <Grid
        templateColumns={{ md: "repeat(3, 1fr)" }}
        gap={6}
        borderBottom="2px solid"
        borderColor="blue.700"
      >
        <GridItem
          rowStart={{ base: 2, md: 1 }}
          justifyContent={{ base: "center", md: "start" }}
          display="flex"
          alignItems="center"
        >
          <Button
            leftIcon={<HamburgerIcon w={6} h={6} />}
            onClick={props.onClick}
            variant="ghost"
          >
            {props.topic.title ? props.topic.title : "Choose topic"}
          </Button>
        </GridItem>
        <GridItem>
          <Center>
            <Heading as="h1" size="lg" my={3}>
              Unsplashed
            </Heading>
          </Center>
        </GridItem>
      </Grid>
    </header>
  );
};

export default Header;
