import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import { Sidebar } from "./Sidebar";
import { UnsplashTopic } from "../models/unsplash/unsplash.model";
import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import Header from "./Header";
import { breakpoints } from "../App";

const defaultTopic: UnsplashTopic = {
  id: "",
  title: "",
};

const RotatedSpan = styled.span`
  display: inline-block;
  position: absolute;
  left: -3rem;
  top: -2.5rem;
  transform: rotateZ(45deg);
`;

const MainContent: React.FC<any> = function (): any {
  const [topic, setTopic] = React.useState<UnsplashTopic>(defaultTopic);
  const [orientation, setOrientation] = React.useState("squarish");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showRotatedSpan = {
    base: false,
    md: true,
  };
  const RotatedSpanDisplay = useBreakpointValue(showRotatedSpan);

  return (
    <div>
      <Header onClick={onOpen} topic={topic} />
      <Sidebar
        topic={topic}
        setTopic={setTopic}
        orientation={orientation}
        setOrientation={setOrientation}
        isOpen={isOpen}
        onClose={onClose}
      />
      <main>
        {topic.id ? (
          <Box justifyContent="center" alignItems="center" py={5} px={2}>
            <PhotoCarousel topic={topic} orientation={orientation} />
          </Box>
        ) : (
          <Flex h="80vh" align="center" justify="center">
            <Heading
              as="h2"
              size="lg"
              justifyContent="center"
              position="relative"
            >
              {RotatedSpanDisplay ? <RotatedSpan>&lt;&mdash;</RotatedSpan> : ""}
              Please choose a topic
            </Heading>
          </Flex>
        )}
      </main>
    </div>
  );
};

export { MainContent };
