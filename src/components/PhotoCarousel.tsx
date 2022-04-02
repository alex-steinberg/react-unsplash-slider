import { Navigation, Grid, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import { UnsplashPhoto } from "../models/unsplash/unsplash.model";
import { useQuery } from "react-query";
import { fetchTopicPhotos } from "../services/api/unsplash";
import { Flex, Button, useBreakpointValue } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  .swiper {
    padding: 0 0.5rem;
    overflow-y: scroll;
  }
  .swiper-slide {
    height: auto;
  }
`;

const PhotoCarousel: React.FC<any> = ({ topic, orientation }) => {
  const [slides, setSlides] = React.useState<UnsplashPhoto[]>([]);

  const {
    isLoading,
    status,
    isError,
    data = [],
  } = useQuery(
    ["topic-photos", topic.id, orientation],
    () => fetchTopicPhotos(topic.id, orientation),
    {
      enabled: !!topic.id,
    }
  );

  useEffect(() => {
    if (topic && topic.id) {
      if (!isLoading && !isError) {
        setSlides(data);
      }
    }
  }, [topic, status, orientation]);

  const gridColumns = {
    base: 1,
    sm: 2,
    md: 3,
  };
  const getGridColumns = useBreakpointValue(gridColumns);

  const gridRows = {
    base: 1,
    md: 2,
  };
  const getGridRows = useBreakpointValue(gridRows);

  return status === "loading" ? (
    <span>Loading photos...</span>
  ) : status === "error" ? (
    <span>There was a problem loading the photos</span>
  ) : (
    <Flex justify="between" h="85vh">
      <Flex>
        <Button
          className="prev-btn"
          h="100%"
          leftIcon={<ChevronLeftIcon w={10} h={10} />}
        />
      </Flex>
      <StyledSwiper
        modules={[Navigation, Grid]}
        spaceBetween={5}
        slidesPerView={getGridColumns}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        grid={{ rows: getGridRows, fill: "row" }}
      >
        {slides.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Flex align="center" justify="center">
              <img src={photo.urls.small} alt={photo.description} />
            </Flex>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <Flex>
        <Button
          className="next-btn"
          h="100%"
          rightIcon={<ChevronRightIcon w={10} h={10} />}
        />
      </Flex>
    </Flex>
  );
};

export default PhotoCarousel;
