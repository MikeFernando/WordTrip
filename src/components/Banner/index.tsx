import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgPos={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Heading
            color='gray.100'
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
          >
            5 Continentes, <br />infinitas possibilidades.
          </Heading>

          <Text 
            color="gray.300" 
            mt="5" 
            fontSize={['sm', 'sm', 'xl', '2l']}
            maxW={['100%', '100%', '100%', '550px']}
            >
            Chegou a hora de tirar do papél a viagem que você sempre sonhou
          </Text>
        </div>

        <Image
          src='/airplane.svg'
          alt='Avião voando com algumas nuvens ao redor'
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform='translateY(25%)'
          ml='5'
        />
      </Flex>

    </Flex>
  )
}