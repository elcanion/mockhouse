import { useColorModeValue } from "@chakra-ui/react";
import { useAuth } from "./Auth/AuthContext";

export const LogoutButton = () => {
    const { currentUser, logout } = useAuth();
    return (
        <Button
              as={'a'}
              fontSize={'sm'}
              p={2}
              fontWeight={500}
              borderRadius={'none'}
              borderWidth={'1px'}
              borderColor={useColorModeValue('black', 'gray.200')}
              color={useColorModeValue('black', 'gray.200')}
              variant={'link'}
              onClick={() => logout()}>
              Sair ({currentUser?.phoneNumber})
        </Button>
    )
}

export const LoginButton = () => {
    return (
        <Button
              as={'a'}
              fontSize={'sm'}
              p={2}
              fontWeight={500}
              borderRadius={'none'}
              borderWidth={'1px'}
              borderColor={useColorModeValue('black', 'gray.200')}
              color={useColorModeValue('black', 'gray.200')}
              variant={'link'}
              href={'login'}
              //onClick={() => login()}
              >
              Entrar
            </Button>
    )
}