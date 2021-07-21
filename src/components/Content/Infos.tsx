import { Flex, Heading, Text, Popover, PopoverTrigger, Icon, PopoverContent, PopoverBody, PopoverArrow, PopoverCloseButton } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (
    <Flex
      align='center'
      justify={['space-between', 'space-around']}
    >
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '4xl', '5xl']} color='yellow.400'>50</Heading>
        <Text fontSize={['sm', 'md', 'lg']} fontWeight='600'>países</Text>
      </Flex>

      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '4xl', '5xl']} color='yellow.400'>60</Heading>
        <Text fontSize={['sm', 'md', 'lg']} fontWeight='600'>Línguas</Text>
      </Flex>

      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '4xl', '5xl']} color='yellow.400'>27</Heading>
        <Text fontSize={['sm', 'md', 'lg']} fontWeight='600'>
          cidades +100
        
          <Popover>
            <PopoverTrigger>
              <span>
               <Icon as={RiInformationLine} cursor='pointer' fontSize={['10px', '16px']} color='yellow.400' />
              </span>
            </PopoverTrigger>

            <PopoverContent bg='gray.700' color='yellow.400'>
              <PopoverArrow bg='gray.700' />
              <PopoverCloseButton />
                <PopoverBody>
                  <Text fontSize={['sm', 'md', 'lg']}>
                    Europa, Brasil, Canáda, Chile 
                  </Text>
                </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}