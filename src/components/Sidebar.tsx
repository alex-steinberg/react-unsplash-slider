import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  Radio,
  RadioGroup,
  VStack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchTopics } from "../services/api/unsplash";
import { UnsplashTopic } from "../models/unsplash/unsplash.model";

const Sidebar: React.FC<any> = function ({
  setTopic,
  topic: chosenTopic,
  orientation,
  setOrientation,
  isOpen,
  onClose,
}: any) {
  const {
    isLoading,
    isError,
    error,
    data = [],
  } = useQuery("topics", fetchTopics);

  useEffect(() => {
    if (data && data.length) {
      setTopic(data[0]);
    }
  }, []);

  function handleClick(topic: UnsplashTopic) {
    setTopic(topic);
    onClose();
  }

  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Topics</DrawerHeader>
          <DrawerBody>
            <List>
              {isError ? (
                <ListItem className="danger">Error loading topics</ListItem>
              ) : isLoading ? (
                <ListItem>Loading...</ListItem>
              ) : (
                data.map((topic: UnsplashTopic) => (
                  <ListItem
                    key={topic.id}
                    className={chosenTopic === topic.title ? "active" : ""}
                    onClick={() => handleClick(topic)}
                  >
                    <Button variant="ghost">{topic.title}</Button>
                  </ListItem>
                ))
              )}
              <ListItem mt={5}>
                <RadioGroup onChange={setOrientation} value={orientation}>
                  <VStack spacing="24px" align="start">
                    <label htmlFor="orientations">Orientations</label>
                    <Radio value="squarish" defaultChecked={true}>
                      Squarish
                    </Radio>
                    <Radio value="landscape">Landscape</Radio>
                    <Radio value="portrait">Portrait</Radio>
                  </VStack>
                </RadioGroup>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Sidebar };
