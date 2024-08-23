import { Box, Flex, Button, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function About () {

    const navigate = useNavigate();

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
                <Heading color='#c9def7' fontFamily='Roboto' fontSize='100px'>Why physiness?</Heading>
            </Box>

            <Flex justify='center'>
                <Box mt='50px'>
                    <Heading color='#54D3B2' fontFamily='Roboto' fontSize='60px'>Review your stats with dashboards</Heading>
                </Box>
            </Flex>
            
            <Flex justify='center'>
                <Box display='flex' justify='center' align='center' mt='50px'>

                            <Image
                                mr='25px'
                                mb='25px'
                                src='..\src\assets\strength_dashboard.jpg'
                                fallbackSrc='https://via.placeholder.com/750'
                                alt='Strength Dashboard'
                            />

                            <Image
                                ml='25px'
                                mb='25px'
                                src='..\src\assets\running_dashboard.jpg'
                                fallbackSrc='https://via.placeholder.com/750'
                                alt='Strength Dashboard'
                            />
                </Box>
            </Flex>

            <Flex justify='center'>
                <Box mt='50px'>
                    <Heading color='#54D3B2' fontFamily='Roboto' fontSize='60px'>Track your progess with charts</Heading>
                </Box>
            </Flex>
            <Flex justify='center'>
                <Box display='flex' justify='center' align='center' mt='50px'>

                            <Image
                                borderStyle='solid' 
                                borderColor='#54D3B2'
                                borderWidth='2px'
                                boxSize='1200px'
                                mb='25px'
                                src='..\src\assets\..'
                                fallbackSrc='https://via.placeholder.com/1200'
                                alt='Chart'
                            />

                </Box>
            </Flex>

            <Flex justify='center'>
                <Box mt='50px'>
                    <Heading color='#54D3B2' fontFamily='Roboto' fontSize='60px'>Keep track of each workout</Heading>
                </Box>
            </Flex>
            <Flex justify='center'>
                <Box display='flex' justify='center' align='center' mt='50px'>



                            <Image
                                borderStyle='solid' 
                                borderColor='#54D3B2'
                                borderWidth='2px'
                                boxSize='1200px'
                                mb='25px'
                                src='..\src\assets\log.jpg'
                                fallbackSrc='https://via.placeholder.com/1200'
                                alt='Chart'
                            />



                </Box>
            </Flex>
        </Box>
    )
}

export default About