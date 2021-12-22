import { ButtonGroup, ButtonGroupProps, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
    <ButtonGroup 
        variant="ghost" 
        color={useColorModeValue('black', 'white')} {...props}
        >
        <IconButton 
            as="a" 
            href="https://www.facebook.com/SISOLUCOESIMOBILIARIAS" 
            aria-label="Facebook"
            borderWidth={'1px'}
            borderColor={useColorModeValue('black', 'white')}
            borderRadius={'none'}
            icon={<FaFacebookSquare fontSize={"20px"} />} 
            />
        <IconButton 
            as="a" 
            href="https://www.instagram.com/si.solucoes.imobiliarias/" 
            aria-label="Instagram"
            borderWidth={'1px'}
            borderColor={useColorModeValue('black', 'white')}
            borderRadius={'none'}
            icon={<FaInstagramSquare fontSize={"20px"} />} 
            />
        <IconButton 
            as="a" 
            href="https://www.youtube.com/channel/UC2yQ0jnlQ52w4Tvx9OeZwTw" 
            aria-label="Youtube"
            borderWidth={'1px'}
            borderColor={useColorModeValue('black', 'white')}
            borderRadius={'none'}
            icon={<FaYoutubeSquare fontSize={"20px"} />} 
            />
    </ButtonGroup>
)