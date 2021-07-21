import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function City() {
  return (
    <>
      <Box borderRadius='4px' overflow='hidden'>
        <Image src='/países/londres.png' h='170px' w='100%' />

        <Flex
          p='6'
          align='center'
          justify='space-between'
          bg='white'
          border='1px'
          borderTop='0'
          borderColor='yellow.300'
        >
          <Flex direction='column'>
            <Heading fontSize='20px' fontWeight='600' mb='12px'>Londres</Heading>
            <Text fontSize='1rem' color='gray.500'>Reino unido</Text>
          </Flex>

          <Image src='/bandeiras/reino-unido.png'/>
          </Flex>
      </Box>

      <Box borderRadius='4px' overflow='hidden'>
        <Image src='/países/paris.png' h='170px' w='100%' />

        <Flex
          p='6'
          align='center'
          justify='space-between'
          bg='white'
          border='1px'
          borderTop='0'
          borderColor='yellow.300'
        >
          <Flex direction='column'>
            <Heading fontSize='20px' fontWeight='600' mb='12px'>Paris</Heading>
            <Text fontSize='1rem' color='gray.500'>França</Text>
          </Flex>

          <Image src='/bandeiras/franca.png'/>
          </Flex>
      </Box>

      <Box borderRadius='4px' overflow='hidden'>
        <Image src='/países/roma.png' h='170px' w='100%' />

        <Flex
          p='6'
          align='center'
          justify='space-between'
          bg='white'
          border='1px'
          borderTop='0'
          borderColor='yellow.300'
        >
          <Flex direction='column'>
            <Heading fontSize='20px' fontWeight='600' mb='12px'>Roma</Heading>
            <Text fontSize='1rem' color='gray.500'>Itália</Text>
          </Flex>

          <Image src='/bandeiras/italia.png'/>
          </Flex>
      </Box>

      <Box borderRadius='4px' overflow='hidden'>
        <Image src='/países/praga.png' h='170px' w='100%' />

        <Flex
          p='6'
          align='center'
          justify='space-between'
          bg='white'
          border='1px'
          borderTop='0'
          borderColor='yellow.300'
        >
          <Flex direction='column'>
            <Heading fontSize='20px' fontWeight='600' mb='12px'>Praga</Heading>
            <Text fontSize='1rem' color='gray.500'>República tcheca</Text>
          </Flex>

          <Image src='/bandeiras/republica-tcheca.png'/>
          </Flex>
      </Box>

      <Box borderRadius='4px' overflow='hidden'>
        <Image src='/países/amsterda.png' h='170px' w='100%' />

        <Flex
          p='6'
          align='center'
          justify='space-between'
          bg='white'
          border='1px'
          borderTop='0'
          borderColor='yellow.300'
        >
          <Flex direction='column'>
            <Heading fontSize='20px' fontWeight='600' mb='12px'>Amsterdã</Heading>
            <Text fontSize='1rem' color='gray.500'>Holanda</Text>
          </Flex>

          <Image src='/bandeiras/holanda.png'/>
          </Flex>
      </Box>
    </>
  )
}