import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

type TravelTypesProps = {
  icon: string;
  text: string;
}

export function TravelType({ icon, text }: TravelTypesProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={['row', 'column']}
      align="center"
      justify="center"
    >
      {isMobile ? <Image src={`/icons/${icon}.svg`} width='85px' height='85px' mb='6'/> 
                : <Text color='yellow.400' fontSize='4xl'>
                    •
                  </Text> }

      <Text
        fontWeight='600'
        color='gray.700'
        fontSize={['md', 'xl', '2xl']}
      >
        {text}
      </Text>
    </Flex>
  )
}