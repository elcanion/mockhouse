import { Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { useAuth } from "../Auth/AuthContext";
import { FavouriteButton } from "./FavouriteButton"

export const AdComment = ({imovel}) => {
    const { preco, tipo, cidade } = imovel.fields
    const { currentUser, logout } = useAuth();
    return (
    <>
        <Heading
        fontSize={'1.8rem'}
        fontWeight={'700'}
        color={useColorModeValue('black', 'white')}>
            
                R$ { preco },00
                {//<AdComment imovel={imovel}/>
                currentUser && 
                <FavouriteButton
                bg={useColorModeValue('brand.light.yellow')}
                mx={5}
                aria-label={`Add ${tipo} ${cidade} to your favourites`}
                />
                }
        </Heading>
    </>
    )
}