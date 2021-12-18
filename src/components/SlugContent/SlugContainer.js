import { Flex, Heading, useColorMode } from "@chakra-ui/react";

export function SlugContainer ({ props }) {
    const { colorMode } = useColorMode()
  
    const bgColor = { light: 'gray.50', dark: 'gray.1000' }
  
    const color = { light: 'black', dark: 'white' }
    return (
        <Flex 
            direction={'column'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            {...props} />
    )
}