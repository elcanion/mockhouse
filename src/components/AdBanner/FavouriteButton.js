import { Icon, IconButton, LightMode, useColorModeValue } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

export const FavouriteButton = (props) => (
    <LightMode>
        <IconButton
            isRound
            bg={'white'}
            color={useColorModeValue('black', 'white')}
            borderWidth={'2px'}
            borderColor={useColorModeValue('black', 'white')}
            size="sm"
            _hover={{ transform: 'scale(1.1)' }}
            sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
            transition="all 0.15s ease"
            icon={<Icon as={FiHeart} transition="all 0.15s ease" color={'brand.light.yellow'}/>}
            boxShadow="base"
            {...props}
        />
    </LightMode>
)