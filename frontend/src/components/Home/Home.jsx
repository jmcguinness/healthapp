import { Flex, Heading } from '@chakra-ui/react'
import RunningDashboard from './RunningDashboard'
import Weather from './Weather'
import Window from './window'
import Header from '../Header'

function Home() {

    return (
        <>
        <div><Header /></div>
        <Flex justify='center' color='white' fontSize='90px' mt='175px'>
            <Heading fontSize='90px'>Welcome back, Josh</Heading>
        </Flex>

        <Flex mt='150px' flexDir='column' mb='250px' h='2000px'>

            <Flex justify='center'>
            <Flex mb='125px'>
                {/*<HomeStats />*/}
                <Weather />
                <RunningDashboard/>
                <Window />
            </Flex>
            </Flex>

            <Flex justify='center'>
                {/*<LiftingDashboard />
                <NewWorkout />
                <RunningDashboard />*/}
            </Flex>

            {/*<Flex mr='50px'>
                <LiftingDashboard />
            </Flex>

            <Flex mr='50px' ml='50px'>
                <NewWorkout />
            </Flex>

            <Flex ml='50px'>
                <RunningDashboard />
            </Flex>*/}
            
        </Flex>
        </>
    )
}

export default Home