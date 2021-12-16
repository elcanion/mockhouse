import { Heading, Text, useColorModeValue } from "@chakra-ui/react"

export const AdComment = ({imovel}) => {
    const { preco } = imovel.fields
    return (
        <Heading
        fontSize={'1.8rem'}
        fontWeight={'700'}
        color={useColorModeValue('black', 'white')}>
            
                R$ { preco },00
        </Heading>
    )
}