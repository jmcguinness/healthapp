import { Card, CardHeader, Container, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow } from '@chakra-ui/react'

function LiftingDashboard () {

    return (
         <>

         <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa'>

            <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Strength Stats</CardHeader>


            <Container>
                <StatGroup>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Bench Press</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>210</StatNumber>
                        <StatHelpText fontSize='30px'>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Overhead Press</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>125</StatNumber>
                        <StatHelpText fontSize='30px'>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Squat</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>265</StatNumber>
                        <StatHelpText fontSize='30px'>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Deadlift</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>235</StatNumber>
                        <StatHelpText fontSize='30px'>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Container>
        </Card>  
        </>

    )
}

export default LiftingDashboard