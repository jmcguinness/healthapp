import { Box, Flex, Container, Heading, Text, Tabs, Tab, TabList, Avatar, HStack  } from '@chakra-ui/react'
import { useNavigate  } from 'react-router-dom'
import { useState } from 'react';

function Header() {

    const navigate = useNavigate();

    const [home, setHome] = useState('Yes')
    const [log, setLog] = useState('No')
    const [lifting, setLifting] = useState('No')
    const [charts, setCharts] = useState('No')

    const handleHome = () => {
        navigate('/home')
        setHome('Yes')
    }

    const handleLog = () => {
        navigate('/log')
        setLog('Yes')
        setHome('No')
    }

    const hadnleLifting = () => {
        navigate('/lifting')
        setLifting('Yes')
    }

    if(home=='Yes') {
        return (
            <Box className='header' w='100%' h='275px' mb='50px' boxShadow='lg' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                <Flex w='100%' p='20px'>
                    <Container m='0px'>
                        <Heading mt='35px' ml='25px'  as='h1' color='#c9def7' fontFamily='Roboto' fontSize='85px' fontWeight='bold' onClick={() => navigate('/home')}>physiness</Heading>
                        <Text color='#c9def7' fontFamily='Roboto' fontSize='25px' onClick={() => navigate('/home')}>it&apos;s bulking season</Text>
                    </Container>
                    <Flex>

                    </Flex>
                    <Container mr='0px' mt='60px'>
                        <Tabs color='#c9def7' align='end'>
                            <TabList>
                                {/*<Tab fontSize='32px' color='#c9def7' onClick={() => navigate('/home')}>Home</Tab>*/}
                                <Tab fontSize='32px' color='#c9def7' onClick={handleHome}>Home</Tab>
                                <Tab fontSize='32px' color='#c9def7' onClick={handleLog}>Running</Tab>
                                <Tab fontSize='32px' color='#c9def7' onClick={hadnleLifting}>Lifting</Tab>
                                <Tab fontSize='32px' color='#c9def7' onClick={() => navigate('/charts')}>Charts</Tab>
                                <Tab fontSize='32px' color='#c9def7'><Avatar key="subtle" variant="subtle"></Avatar></Tab>
                            </TabList>
                        </Tabs>


                    </Container>
                </Flex>
            </Box>
    )} if(log=='Yes') {
        return (
            <Box className='header' w='100%' h='275px' mb='50px' boxShadow='lg' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                <Flex w='100%' p='20px'>
                    <Container m='0px'>
                        <Heading mt='35px' ml='25px'  as='h1' color='#c9def7' fontFamily='Roboto' fontSize='85px' fontWeight='bold' onClick={() => navigate('/home')}>physiness</Heading>jhnlk
                        <Text color='#c9def7' fontFamily='Roboto' fontSize='25px' onClick={() => navigate('/home')}>it&apos;s bulking season</Text>
                    </Container>
                    <Container mr='0px' mt='60px'>
                        <Tabs color='#c9def7' align='end'>
                            <TabList>
                                {/*<Tab fontSize='32px' color='#c9def7' onClick={() => navigate('/home')}>Home</Tab>*/}
                                <Tab fontSize='32px' color='#c9def7' onClick={handleHome}>Home</Tab>
                                <Tab fontSize='32px' color='#c9def7' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2' onClick={handleLog}>Running</Tab>
                                <Tab fontSize='32px' color='#c9def7' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2' onClick={handleLog}>Lifting</Tab>
                                <Tab fontSize='32px' color='#c9def7' onClick={() => navigate('/charts')}>Charts</Tab>
                            </TabList>
                        </Tabs>
                    </Container>
                </Flex>
            </Box>
    )}
}

export default Header