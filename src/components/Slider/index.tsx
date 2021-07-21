import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slider() {
  return (
    <Flex
      w="100%"
      maxWidth={1240}
      mx="auto"
      h={["250px", "450px"]}
      mb={['5', '10']}
    >
      <Swiper
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex 
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url(/europe.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continent/europa">
              <a>
                <Heading fontWeight="700" color="gray.100" fontSize={['3xl', '4xl', '5xl']}>Europa</Heading>
                <Text color="gray.300" fontWeight="700" fontSize={['0.8rem', '1xl', '2xl']}>O Continente mais antigo</Text>
              </a>
            </Link>

          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex 
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url(/europe2.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continent/europa">
              <a>
                <Heading fontWeight="700" color="gray.100" fontSize={['3xl', '4xl', '5xl']}>Europa</Heading>
                <Text color="gray.300" fontWeight="700" fontSize={['0.8rem', '1xl', '2xl']}>O Continente mais antigo</Text>
              </a>
            </Link>

          </Flex>
        </SwiperSlide>
      </Swiper>

    </Flex>
  )
}