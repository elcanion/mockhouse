import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import "@fontsource/bodoni-moda"
  
  export const HeroBanner = ({ title }) => (
    <Box 
      maxW="100%vw" 
      mx="auto" 
      px={{ base: '0', lg: '12' }} 
      py={{ base: '0', lg: '12' }}
      marginBottom={{ base: '-28', lg: '0'}}
      bg={useColorModeValue('gray.50', 'black')}
      >
      <Stack 
        direction={{ base: 'column-reverse', lg: 'row' }} 
        spacing={{ base: '20', lg: '20' }}        
        >
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('white', 'black'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}
            >
              {/*<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                Misguided
              </Heading>
              */}
              <Heading 
              //size="xl" //fontWeight="normal"
                as={'h1'}
                fontSize={{ base: "6vw", lg: "3.5vw"}}
                fontFamily={'Bodoni Moda'}
                color={useColorModeValue('black', 'white')}>
                { title }
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link 
                //color={useColorModeValue('red.500', 'red.300')} 
                //fontWeight="bold" 
                //fontSize="lg"
                >
              <Button
                bg={useColorModeValue('white', 'black')}
                color={useColorModeValue('black', 'white')}
                borderColor={useColorModeValue('black', 'white')}
                borderWidth={'1px'}
                borderRadius={'none'}
                >Saiba mais</Button>
              </Link>
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Box
            maxH="600px"
            minW="300px"
            objectFit={'cover'}
            flex={'1'}
            
            >
            <Logo 
                  w={'100%'}
                  h={'100%'}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  )

  HeroBanner.defaultProps = {
    title: 'O que verificar na compra de um imóvel na planta?',
  }
  
export const Logo = (props) => {
  return (
  <Icon 
      viewBox="0 0 381.99 194.43" 
      xmlns="http://www.w3.org/2000/svg"
      fill={'none'}
      stroke={useColorModeValue('black', 'black')}
      strokeMiterlimit={10}
          {...props}>
      
          {/*<style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#0c0c0c;stroke-miterlimit:10;}.cls-3{fill:#0c0c0c;}.cls-4{fill:url(#New_Pattern_Swatch_1);}</style>
          */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406.11 273">
  <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2">
  <path fill={useColorModeValue("#A31D05", "#ffaf5f")} stroke="none" className="cls-1" d="M218.4.05c84.92,2,177.26,70.64,180,140.82.22,5.48,1.58,40.22-21.17,61.41C343.33,233.86,296,198,226.87,226.63c-38.61,16-34.51,31.6-66.7,41.3C102.39,285.34,20,255.94,3.46,209.69-21.54,139.61,92.84-2.93,218.4.05Z"/>
  <rect fill={'white'} stroke={'none'} className="cls-2" x="293.88" y="75.09" width="112.23" height="106.91"/><path className="cls-3" d="M153.14,106.54S124.65,180.15,178,193.68"/>
  <path className="cls-3" d="M194.78,165.61q-3.93,11.05-13.91,7.14"/><line className="cls-3" x1="147.62" y1="106.9" x2="164.28" y2="118.77"/>
  <path className="cls-3" d="M199.25,122.71c-6.34-4.11-13-4.34-20.3,2.5"/>
  <ellipse fill={'black'} stroke={'none'} className="cls-4" cx="190.7" cy="132.8" rx="7.15" ry="3.44" transform="translate(15.12 285.02) rotate(-75.78)"/>
  <ellipse fill={'black'} stroke={'none'} className="cls-4" cx="155.75" cy="123.94" rx="7.15" ry="3.44" transform="translate(-2.66 244.46) rotate(-75.78)"/>
  <polyline className="cls-3" points="172.83 132.84 167.63 153.37 164.28 155.43 165.72 160.9"/><line className="cls-3" x1="178.29" y1="190.74" x2="178.29" y2="215.52"/>
  <path fill={'black'} stroke={'none'} className="cls-4" d="M152.15,93.13,151.6,112a65.08,65.08,0,0,0,4.67-16,80.13,80.13,0,0,0,39,16c-9.56-4.49-15.74-8.51-13.67-11.39,14.13,3.09,27.62,6.62,29.87,18,20.75-18,23.28,17,7.08,56.16C301.38,60.56,152.15,55.82,152.15,93.13Z"/>
  <line className="cls-3" x1="17.52" y1="236.66" x2="258.93" y2="236.66"/><path className="cls-3" d="M219.5,207.33q-5.35,18-28.8,20.42"/>
  <path className="cls-3" d="M150.61,208.45c4.15-1.18,8.36-1.45,12.75.62a27.77,27.77,0,0,1,6.09,9.91l2.36-1.73A52.24,52.24,0,0,0,165.74,203c-4.22-4.42-10.28-3.49-16.76-1.37a12.68,12.68,0,0,1,3.14-12.18c2.1-1.64,4-1.44,7.8.06l3.44,2.82c3.37,2.48,7.61-2.21,5.32-5.18-7.05-6.16-16.42-12.71-23.71-4.42-4,5-6.18,10.66-6.85,17.91-3.78,9.4-4.84,22.28-6.89,36"/>
  <path className="cls-3" d="M169.45,219v3.34c-5.36-5.23-11.91-6.9-18.95-7.06"/>
  <path className="cls-3" d="M169.45,222.32a7.67,7.67,0,0,1,.87,7.8c-2.8,3.39-6.68,4.15-10.9,4.09-2.39-1.35-2.59-2.76-1.07-4.21l3.54-3.47"/>
  <path className="cls-3" d="M155.58,228.27c.29,2.19-1.76,7.1-4.06,8.26"/><line className="cls-3" x1="159.98" y1="228.27" x2="153.42" y2="228.27"/>
  <circle className="cls-4" cx="115.86" cy="99.24" r="2.11"/><path className="cls-3" d="M115.39,93.66c-5.11-27.82,41.58-58.46-5.11-48.5"/>
  <line className="cls-3" x1="17.52" y1="217.54" x2="88.58" y2="217.54"/><line className="cls-3" x1="17.52" y1="198.42" x2="88.58" y2="198.42"/>
  <circle className="cls-4" cx="276.42" cy="202.85" r="2.38"/><circle className="cls-4" cx="276.42" cy="191.23" r="2.38"/>
  <circle className="cls-4" cx="276.42" cy="179.62" r="2.38"/><circle className="cls-4" cx="276.42" cy="168" r="2.38"/><circle className="cls-4" cx="288.19" cy="202.85" r="2.38"/>
  <circle className="cls-4" cx="288.19" cy="191.23" r="2.38"/><circle className="cls-4" cx="288.19" cy="179.62" r="2.38"/><circle className="cls-4" cx="288.19" cy="168" r="2.38"/>
  <circle className="cls-4" cx="298.65" cy="202.85" r="2.38"/><circle className="cls-4" cx="298.65" cy="191.23" r="2.38"/><circle className="cls-4" cx="298.65" cy="179.62" r="2.38"/>
  <circle className="cls-4" cx="298.65" cy="168" r="2.38"/><circle className="cls-4" cx="310.42" cy="202.85" r="2.38"/><circle className="cls-4" cx="310.42" cy="191.23" r="2.38"/>
  <circle className="cls-4" cx="310.42" cy="179.62" r="2.38"/><circle className="cls-4" cx="310.42" cy="168" r="2.38"/><line className="cls-5" x1="393.7" y1="184.29" x2="384.64" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="176.17" x2="376.53" y2="193.35"/><line className="cls-5" x1="393.7" y1="167.43" x2="367.79" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="158.17" x2="358.53" y2="193.35"/><line className="cls-5" x1="393.7" y1="149.35" x2="349.7" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="140.89" x2="341.23" y2="193.35"/><line className="cls-5" x1="393.7" y1="132.05" x2="332.41" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="123.93" x2="324.29" y2="193.35"/><line className="cls-5" x1="393.7" y1="115.21" x2="315.55" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="105.93" x2="306.29" y2="193.35"/><line className="cls-5" x1="393.7" y1="97.11" x2="297.47" y2="193.35"/>
  <line className="cls-5" x1="393.7" y1="88.65" x2="288.99" y2="193.35"/><line className="cls-5" x1="388.93" y1="84.41" x2="284.76" y2="188.58"/>
  <line className="cls-5" x1="380.82" y1="84.41" x2="284.76" y2="180.46"/><line className="cls-5" x1="372.08" y1="84.41" x2="284.76" y2="171.73"/>
  <line className="cls-5" x1="362.82" y1="84.41" x2="284.76" y2="162.46"/><line className="cls-5" x1="353.98" y1="84.41" x2="284.76" y2="153.64"/>
  <line className="cls-5" x1="345.52" y1="84.41" x2="284.76" y2="145.17"/><line className="cls-5" x1="336.52" y1="84.41" x2="284.76" y2="136.18"/>
  <line className="cls-5" x1="328.4" y1="84.41" x2="284.76" y2="128.06"/><line className="cls-5" x1="319.68" y1="84.41" x2="284.76" y2="119.32"/>
  <line className="cls-5" x1="310.4" y1="84.41" x2="284.76" y2="110.06"/><line className="cls-5" x1="301.58" y1="84.41" x2="284.76" y2="101.23"/>
  <line className="cls-5" x1="293.12" y1="84.41" x2="284.76" y2="92.76"/></g></g>
  </svg>
      
      </Icon>);
};