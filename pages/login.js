import { Button, Container, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';
import { firebase, auth } from '../src/lib/firebase';


const Login = () => {
    //const [phoneNumber, setnumber] = useState('');
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
            <Stack spacing={4} display={!show ? "block" : "none"}>
                <InputGroup>
                    <InputLeftAddon children='+55' />
                    <Input 
                        type='tel'
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="Número de telefone" />
                </InputGroup>
                <div id="recaptcha-container"></div>
                <Button onClick={signin}>Enviar código de verificação</Button>
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
            {/*
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={phoneNumber} onChange={(e) => { 
                       setnumber(e.target.value) }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
                    */}
        </Container>
    );
}

export default Login;