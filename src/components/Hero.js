import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import AdBanner from './AdBanner/AdBanner'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading
      fontSize="8vw"
    >
        
      
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'doggo',
}
