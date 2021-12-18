import { Box, Container, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import AdBanner from './AdBanner/AdBanner'
import { HeroBanner } from './HeroBanner/HeroBanner'

export const Hero = () => (
  //<Flex justifyContent="center" alignItems="center" height="100vh">
  <Container
    maxWidth={'5x1'}
    height={'80vh'}
    bg={useColorModeValue('gray.50', 'black')}
    color={useColorModeValue('black', 'white')}
    display={'flex'}
    position={'relative'}
    alignItems={'center'}
    justifyContent={'space-between'}
    borderColor={useColorModeValue('black', 'white')}
    borderBottomWidth={'2px'}
    //borderWidth={'2px'}
    borderRadius={'none'}
  >
    <HeroBanner />
  </Container>
)

