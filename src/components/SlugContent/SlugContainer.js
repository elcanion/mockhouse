import { Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import { MdRoom } from "react-icons/md";

export function SlugContainer ({ imovel }) {
    const { colorMode } = useColorMode()
  
    const bgColor = { light: 'gray.50', dark: 'gray.1000' }
  
    const color = { light: 'black', dark: 'white' }

    const { endereco, cidade, tipo, codigo } = imovel.fields
    return (
        <>
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            height={'88vh'}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
        <Stack direction={'row'} 
          align={'center'}
          >
            <MdRoom/>
            <Text>{cidade}</Text>
            <Text 
              pl={5}
              color={'yellow.1000'}
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
              <Text as={'span'} color={'yellow.1000'} fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
                {endereco}
              </Text>
            </Heading>
            </Flex>
        </>
    )
}