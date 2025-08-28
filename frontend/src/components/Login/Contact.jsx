import { Box, Flex, Card, CardHeader, Container, Heading, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Spacer, Slider, CardBody, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Contact () {

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
            <Flex justify='center' mt='250px'>
                <Card h='1500px' w='2500px' borderStyle='solid' borderWidth='5px' borderColor='' bgColor='rgb(24, 112, 200)'>

                    <CardHeader mt='75px' color='white' fontSize='100px' textShadow='3px 2px 2px rgb(22, 6, 86)'>
                        Contact Us
                    </CardHeader>
                        Please do not attempt to contact us, unless you need to update payment. Thank you.
                        <Text color='white' fontSize='40px' mt='50px'>Billing@physiness.com</Text>
                    <CardBody>
                        
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    )
}

export default Contact