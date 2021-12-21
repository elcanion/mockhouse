import { Box, Button, Container, Input, InputGroup, InputLeftAddon, Stack, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';
import { firebase, auth } from '../src/lib/firebase';


const Login = () => {
    //const [phoneNumber, setnumber] = useState('');

    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneChange = (event) => setPhoneNumber(event.target.value)
    const handleVerifyChange = (event) => setotp(event.target.value)

    const signin = () => {
        if (phoneNumber === "" || phoneNumber.length < 10) return ;
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(phoneNumber, verify).then((result) => {
            setfinal(result);
            alert('code sent', verify)
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            alert("it worked!")
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    return (
        <Container>
            <Stack 
                spacing={4} 
                display={!show ? "block" : "none"}
                mx={'auto'}
                maxW={'lg'}
                py={12}
                px={6}                
                >
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'black')}
                    boxShadow={'lg'}
                    p={8}
                    >
                    <Stack spacing={4}>
                        
                <InputGroup>
                    
                    <Input 
                        type='tel'
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        color={useColorModeValue('black', 'white')}
                        placeholder="Número de telefone" />
                </InputGroup>
                <div id="recaptcha-container"></div>
                <Button 
                    onClick={signin}
                    color={linkColor}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}
                    >Enviar código de verificação</Button>
                    </Stack>
                </Box>
            </Stack>
            <Stack spacing={4} display={show ? "block" : "none"}>
            <InputGroup>
                    <Input 
                        type='text'
                        placeholder="Código de verificação"
                        value={otp}
                        onChange={handleVerifyChange}/>
                </InputGroup>
                <div id="recaptcha-container"></div>
                <Button onClick={ValidateOtp}>Verificar</Button>
            </Stack>
        </Container>
    );
}

export default Login;