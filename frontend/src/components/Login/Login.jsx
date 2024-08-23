import { Card, Button, Text, Input, FormControl, Flex, Heading, Box, FormLabel, Spacer, Link, CardBody, Image} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Login () {

    const navigate = useNavigate();

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
            <Flex justify='center'>
                <Text mt='150px' mr='25px' fontSize='200px'>🏃</Text>
                <Text fontSize='75px' mt='150px' color='#c9def7' fontFamily='Roboto'>Taking care of</Text><Heading fontSize='125px' mt='175px' ml='25px' color='#c9def7' fontFamily='Roboto'>physiness</Heading>
                <Text mt='150px' ml='25px' fontSize='200px'>🏋️‍♂️</Text>
            </Flex>
            <Box justify='center' align='center'>
                <Heading color='#c9def7' fontFamily='Roboto' fontSize='65px'>Welcome back!</Heading>
                <Text color='white' fontSize='35px'>Continue your journey today</Text>
                <Box w="650px" h='650' Flex align="center" justify='center' mt="65px"  boxShadow='lg' p="25px" bgColor="RGBA(255, 255, 255, 0.36)" borderStyle='solid' borderWidth='2px' borderColor='#54D3B2'>

                        <FormControl isRequired mb="40px" w="350px" mt='25px'>
                        <FormLabel fontSize='30px' color='white' justify='center'>Username</FormLabel>
                        <Input bgColor="white" type="text" name="title" placeholder="Username" h='55px' mt='10px' fontSize='25px' justify='center' borderStyle='solid' borderWidth='3px' borderColor='#18235F'/>
                        </FormControl>

                        <FormControl isRequired mb="40px" w="350px">
                        <FormLabel fontSize='30px' color='white'>Password</FormLabel>
                        <Input bgColor="white" type="text" name="title" placeholder="Password" h='55px' mt='10px' fontSize='25px' borderStyle='solid' borderWidth='3px' borderColor='#18235F'/>
                        </FormControl>

                        <Button mb="20px" mt='20px' type="submit" colorScheme="blue" fontSize='25px' h='75px' w='125px' onClick={() => navigate('/home')}>Login</Button>

                        <Spacer />
                        
                        <Link color="#18235F" fontSize='25px'>Forgot your password?</Link>
                        <Spacer />
                        <Link color="#18235F" fontSize='25px' onClick={() => navigate('/createUser')}>Create Account</Link>
                </Box>
            </Box>
            <Text mt='100px' fontSize='65px' color='#c9def7' ml='450px' mr='450px' justify='center'>Join Physiness today and take control of your health. Dive into your fitness progress and areas of improvement.</Text>
            <Text mt='100px' fontSize='55px' ml='300px' mr='300px' color='white'>Don&apos;t just take our word for it!</Text>
            <Card Flex align="center" p="30px" m="75px" boxShadow='lg' bgColor="RGBA(0, 0, 0, 0.001)">
                <CardBody Flex align="Center" m="25px">
                    <Image
                        mb='25px'
                        borderRadius='full'
                        boxSize='250px'
                        src='..\src\assets\socrates.jpeg'
                        fallbackSrc='https://via.placeholder.com/150'
                        alt='Socrates'
                    />
                    <Text maxW="750px" m="15px" color='#c9def7' fontSize='30px' mb='20px'>&quot;it is a disgrace to grow old through sheer carelessness before seeing what manner of person you may become by developing your bodily strength and beauty, with the help of physiness, to their highest limit.&quot;</Text>
                    <Text color="#54D3B2" fontSize="30px">Socrates</Text>
                </CardBody>
                <CardBody Flex align="Center">
                    <Image
                        mb='25px'
                        borderRadius='full'
                        boxSize='250px'
                        src='..\src\assets\plato.jpeg'
                        fallbackSrc='https://via.placeholder.com/150'
                        alt='Plato'
                    />
                    <Text maxW="750px" m="15px" color='#c9def7' fontSize='30px' mb='20px'>&quot;In order for man to succeed in life, God provided him with two means, education and physical activity. Not separately, one for the soul and the other for the body, but for the two together. With these two means, and with the help of physiness, a person can attain perfection.&quot;</Text>
                    <Text color="#54D3B2" fontSize="30px">Plato</Text>
                </CardBody>
            </Card>
        </Box>
    )
}

export default Login