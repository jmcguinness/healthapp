import { Box, Flex, Card, CardHeader, Container, Heading, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Spacer } from '@chakra-ui/react'

function RunningDashboard () {

    return (
         <>

         <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' >

            <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Running Stats</CardHeader>


            <Container>
                <StatGroup>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Previous Run Milage</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>4.5 Miles</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Previous Run Time</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>00:42</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Longest Run</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>12 Miles</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Fastest Mile</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>6:43</StatNumber>
                    </Stat>
                </StatGroup>
            </Container>
        </Card>  
        </>

    )
}

export default RunningDashboard