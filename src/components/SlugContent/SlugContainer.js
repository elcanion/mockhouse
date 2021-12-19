import { Container, Flex, Heading, Icon, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdRoom } from "react-icons/md";
import  SlugFeatureDev from "./SlugFeature-dev";

export function SlugContainer ({ imovel }) {
    const { colorMode } = useColorMode()
  
    const bgColor = { light: 'brand.light.white', dark: 'brand.dark.gray' }
  
    const color = { light: 'black', dark: 'white' }

    const { endereco, cidade, tipo, codigo, carousel } = imovel.fields
    return (
        <>
        
        <Container
          maxWidth={'8xl'} 
          mx="auto"
          px={{ base: '0', lg: '12'}}
          py={{ base: '0', lg: '12'}}
          //p='12'
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          >
            
            <SlugFeatureDev 
              feature='2 quartos' 
              description="*Descrição mais detalhada sobre a característica*"
              imovel={imovel}/>
            <SlugFeatureDev 
              feature='Em frente à Praça Japonesa'
              description="*Descrição mais detalhada sobre a característica*"
              imovel={imovel}/>
        </Container>
        </>
    )
}
