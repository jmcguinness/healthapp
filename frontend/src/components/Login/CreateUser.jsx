import { Text, Box, Flex, Button, Heading, FormControl, FormLabel, Input, Spacer, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function CreateUser () {

    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [verifyAccount, setVerifyAccount] = useState('Not Verified')

    const handleSubmit = () => {
        postNewUser()
    }

    const postNewUser = async () => {

        let newUser = new FormData

        newUser.append('username', username)
        newUser.append('password', password)
        newUser.append('email', email)

        console.log(verifyAccount)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/createUser',
            data: newUser
        }).then((response) => {
            console.log(response)
            if (response.status == 200) {
                setVerifyAccount('Verified')
                console.log(verifyAccount)
            }
        })
    }

    if (verifyAccount == 'Not Verified') {
        return (
            <Box h='2500px'>
                <Flex  backgroundColor='#54D3B2' borderBottom='4px' justify='center' borderStyle='solid' borderColor='#c9def7'>
                    <Flex>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='45px' fontWeight='bold' fontFamily='Roboto' onClick={() => navigate('/login')}>physiness</Button>
                    </Flex>
                    <Flex justify='center' align='center'>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/about')}>About</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/createUser')}>Create Account</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/pricing')}>Pricing</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/contact')}>Contact Us</Button>
                    </Flex>
                </Flex>
                <Box justify='center' align='center' mt='150px'>
                    <Heading color='#c9def7' fontFamily='Roboto' fontSize='65px'>Create your new account</Heading>
                    <Text color='white' fontSize='35px'>Take a few moments to invest in your health</Text>
                    <Box w="700px" h='900px' Flex align="center" justify='center' mt="65px"  boxShadow='lg' p="25px" bgColor="RGBA(255, 255, 255, 0.36)" borderStyle='solid' borderWidth='2px' borderColor='#54D3B2'>

                            <FormControl isRequired mb="40px" w="350px" mt='25px'>
                            <FormLabel fontSize='30px' color='white' justify='center'>Username</FormLabel>
                            <Input bgColor="white" type="text" name="title" placeholder="Username" h='55px' mt='10px' fontSize='25px' justify='center' onChange={(e) => setUserName(e.target.value)}/>
                            </FormControl>

                            <FormControl isRequired mb="40px" w="350px">
                            <FormLabel fontSize='30px' color='white'>Password</FormLabel>
                            <Input bgColor="white" type="text" name="title" placeholder="Password" h='55px' mt='10px' fontSize='25px' onChange={(e) => setPassword(e.target.value)}/>
                            </FormControl>

                            <FormControl isRequired mb="40px" w="350px">
                                <FormLabel fontSize='30px' color='white'>Confirm Password</FormLabel>
                                <Input bgColor="white" type="text" name="title" placeholder="Confirm Password" h='55px' mt='10px' fontSize='25px'/>
                            </FormControl>

                            <FormControl isRequired mb="40px" w="350px">
                                <FormLabel fontSize='30px' color='white'>Email Address</FormLabel>
                                <Input bgColor="white" type="email" name="title" placeholder="Email Address" h='55px' mt='10px' fontSize='25px' onChange={(e) => setEmail(e.target.value)}/>
                            </FormControl>

                            <Button mb="20px" mt='20px' type="submit" colorScheme="blue" fontSize='25px' h='75px' w='250px' onClick={handleSubmit}>Create Account</Button>

                            <Spacer />
                            
                            <Link color="#18235F" fontSize='25px' onClick={() => navigate('/login')}>Already have an account?</Link>
                    </Box>
                </Box>
            </Box>
        )
    } else if (verifyAccount == 'Verified') {
        return(
            <Box h='2500px'>
                <Flex  backgroundColor='#54D3B2' borderBottom='4px' justify='center' borderStyle='solid' borderColor='#c9def7'>
                    <Flex>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='45px' fontWeight='bold' fontFamily='Roboto' onClick={() => navigate('/login')}>physiness</Button>
                    </Flex>
                    <Flex justify='center' align='center'>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/about')}>About</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/createUser')}>Create Account</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/pricing')}>Pricing</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/contact')}>Contact Us</Button>
                    </Flex>
                </Flex>
                <Box justify='center' align='center' mt='150px'>
                    <Heading color='#c9def7' fontFamily='Roboto' fontSize='65px'>Create your new account</Heading>
                    <Text color='white' fontSize='35px'>Take a few moments to invest in your health</Text>
                    <Box w="700px" h='900px' Flex align="center" justify='center' mt="65px"  boxShadow='lg' p="25px" bgColor="RGBA(255, 255, 255, 0.36)" borderStyle='solid' borderWidth='2px' borderColor='#54D3B2'>

                        <Heading color='#c9def7' fontFamily='Roboto' fontSize='65px' mt='300px'>You&apos;re all set!</Heading>
                        <Link color='white' fontSize='35px' onClick={() => navigate('/login')}>Log in to your new account</Link>
                             
                    </Box>
                </Box>
        </Box>
        )
    }
}

export default CreateUser