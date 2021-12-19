import { Box, Divider, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { MdRoom } from "react-icons/md"

export const AdHeading = ({imovel}) => {
  const { codigo, cidade, tipo, endereco } = imovel.fields
    return (
        <>
        <Stack direction={'row'} 
          align={'center'}
          >
            <MdRoom/>
            <Text>{cidade}</Text>
            <Text 
              pl={5}
              color={useColorModeValue('brand.light.yellow', 'brand.dark.yellow')}
            >
              Código {codigo}
            </Text>
        </Stack>
        <Heading
              as={'h1'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'yellow.1000',
                  zIndex: -1,
                }}>
                  <Flex mb={'-35'}>{tipo}</Flex>
              </Text>
              <br />
              <Text as={'span'} 
              color={useColorModeValue('brand.light.yellow', 'brand.dark.yellow')} 
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
                {endereco}
              </Text>
              <Divider 
                variant={'solid'} 
                opacity={1} 
                borderColor={useColorModeValue('brand.light.black', 'brand.dark.yellow')} 
                height={3} 
                borderBottomWidth={2}/>
            </Heading>
        </>
    )
}