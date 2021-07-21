import { Flex, Heading } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Travel } from "../components/Travel";

export default function Home() {
  return (
      <Flex direction="column">
        <Header />
        <Banner />
        <Travel />
        <Divider />

        <Heading
          fontSize={['20px', '36px']}
          fontWeight="500"
          textAlign="center"
          mb={['5', '14']}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
  )
}
