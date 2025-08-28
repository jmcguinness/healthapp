import { Container, Card, CardHeader, Button, Text, Input, FormControl, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import GZCLPSquat from './LiftingProgram.jsx/GZCLPSquat'
import GZCLPBench from './LiftingProgram.jsx/GZCLPBench'
import GZCLPPress from './LiftingProgram.jsx/GZCLPPress'
import GZCLPDeadlift from './LiftingProgram.jsx/GZCLPDeadlift'

function NewWorkout () {

    {/* Button Variable */}
    const [newWorkout, setNewWorkout] = useState(false)
    const [typeSelected, setTypeSelected] = useState(false)
    const [runSelected, setRunSelected] = useState(false)
    const [liftSelected, setLiftSelected] = useState(false)
    const [gzclpSelected, setGzclpSelected] = useState(false)
    const [liftType, setLiftType] = useState()
    const [renderLiftType, setRenderLiftType] = useState()
    const [squatSelected, setSquatSelected] = useState(false)
    const [benchSelected, setBenchSelected] = useState(false)
    const [deadliftSelected, setDeadliftSelected] = useState(false)
    const [pressSelected, setPressSelected] = useState(false)
    const [received, setReceived] = useState(true)
    
    {/* Form Variables */}
    const [workoutSelected, setWorkoutSelected] = useState('')
    const [runDetails, setRunDetails] = useState('')


    {/* Render Variables */}
    const [renderWorkoutSelected, setRenderWorkoutSelected] = useState('')
    const [renderRunDetails, setRenderRunDetails] = useState('')

    const getValue = () => {
        return (gzclpSelected)
    }
    

    {/* Handling buttons within new workout panel */}

    const handleNewWorkout = () => {
        setNewWorkout(true)
        setReceived(false)
    }

    const handleRun = () => {
        setTypeSelected(true)
        setRunSelected(true)
        setWorkoutSelected('Run')
    }

    const handleLift = () => {
        setTypeSelected(true)
        setLiftSelected(true)
        setWorkoutSelected('Lift')
    }
    const handleGZCLPSelect = () => {
        setGzclpSelected(true)
    }

    const handleLiftSubmitSquat = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        setReceived(true)
        setSquatSelected(true)
        setLiftType('Squat')
    }

    const handleLiftSubmitBench = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        setReceived(true)
        setBenchSelected(true)
        setLiftType('Bench')
    }

    const handleLiftSubmitDeadlift = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        setReceived(true)
        setDeadliftSelected(true)
        setLiftType('Deadlift')
    }

    const handleLiftSubmitPress = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        setReceived(true)
        setPressSelected(true)
        setLiftType('Press')
    }


    const handleSubmit = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        setReceived(true)
        postNewWorkout()
    }

    const handleBackNewWorkout = () => {
        setNewWorkout(false)
        setReceived(true)
    }

    const handleBackWorkoutType = () => {
        setTypeSelected(false)
        setLiftSelected(false)
        setRunSelected(false)
    }

    const getMostRecentWorkout = async () => {

        await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/newWorkout'
        }).then((response) => {
            console.log(response.data)
            setRenderWorkoutSelected(response.data[response.data.length-1].workoutSelected)
            setRenderRunDetails(response.data[response.data.length-1].runDetails)
            setRenderLiftType(response.data[response.data.length-1].liftType)
            console.log(renderLiftType)
        })
    }

    const postNewWorkout = async () => {

        let workoutData = new FormData()

        workoutData.append('workoutSelected', workoutSelected)
        workoutData.append('runDetails', runDetails)
        workoutData.append('liftType', liftType)

        console.log(workoutData.runDetails)
        console.log(renderLiftType)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/newWorkout',
            data: workoutData
        }).then((response) => {
            console.log(response)
        })
    }

    const pageLoad = () => {
        if(liftType == 'Squat' || liftType == 'Bench' || liftType == 'Deadlift' || liftType == 'Press'){
            postNewWorkout()
        }
        getMostRecentWorkout()
    }

    useEffect(() => {
        pageLoad();
    }, [])

    if (newWorkout == false & renderWorkoutSelected == 'Run' & received == true) {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                <CardHeader fontSize='75px'  color='white' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='#c9def7' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='25px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='75px' h='250px'>
                    <Text fontSize='27.5px' color='white'>{renderRunDetails}</Text>
                </Container>
                <Container>
                    <Button  backgroundColor='#54D3B2' h='100px' w='250px' color='#243b55' fontSize='35px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == false & renderWorkoutSelected == 'Lift' & received == true & renderLiftType == 'Squat') {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='linear-gradient(to right, #141e30, #243b55)'>
                <CardHeader fontSize='75px'  color='white' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='#c9def7' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='5px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='100px'>
                    <GZCLPSquat/>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == false & renderWorkoutSelected == 'Lift' & received == true & renderLiftType == 'Bench') {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='linear-gradient(to right, #141e30, #243b55)'>
                <CardHeader fontSize='75px'  color='white' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='#c9def7' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='5px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='100px'>
                    <GZCLPBench/>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == false & renderWorkoutSelected == 'Lift' & received == true & renderLiftType == 'Press') {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='linear-gradient(to right, #141e30, #243b55)'>
                <CardHeader fontSize='75px'  color='white' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='#c9def7' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='5px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='100px'>
                    <GZCLPPress/>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == false & renderWorkoutSelected == 'Lift' & received == true & renderLiftType == 'Deadlift') {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='linear-gradient(to right, #141e30, #243b55)'>
                <CardHeader fontSize='75px'  color='white' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='#c9def7' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='5px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='100px'>
                    <GZCLPDeadlift/>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == true & typeSelected == false) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackNewWorkout}>Back</Button>
                </Container>    
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please select the workout type</CardHeader>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                    onClick={handleRun}>
                        Run
                    </Button>
                    <Button h='90px' w='180px' ml='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                    onClick={handleLift}>
                        Lift
                    </Button>
                </Container>
            </Card>
    )
    } else if (newWorkout == true & typeSelected == true & runSelected == true) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackWorkoutType}>Back</Button>
                </Container> 
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please provide the run details</CardHeader>
                <Container>
                    <FormControl isRequired>
                    <Input variant='outline' mb='75px' h='250px' outlineColor='black' fontSize='25px' align='center' justify='center' onChange={(e) => setRunDetails(e.target.value)}></Input>
                    </FormControl>
                </Container>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold' mt='15px'
                    onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Card>
    )
    } else if (newWorkout == true & typeSelected == true & liftSelected == true & gzclpSelected == false) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackNewWorkout}>Back</Button>
                </Container>    
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please select your program</CardHeader>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                    onClick={handleGZCLPSelect}>
                        GZCLP
                    </Button>

                </Container>
            </Card>
    )
    }  else if (newWorkout == true & typeSelected == true & liftSelected == true & gzclpSelected == true) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackNewWorkout}>Back</Button>
                </Container>    
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please select your workout</CardHeader>
                    
                    <Flex justify='center'>
               
                        <Button h='100px' w='275px' mb='10px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                        onClick={handleLiftSubmitSquat}>
                            Squat
                        </Button>

                    </Flex>

                    <Flex justify='center'>
               
                        <Button h='100px' w='275px' mt='10px' mb='10px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                        onClick={handleLiftSubmitBench}>
                            Bench
                        </Button>

                    </Flex>

                    <Flex justify='center'>

                        <Button h='100px' w='275px' mt='10px' mb='10px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                        onClick={handleLiftSubmitDeadlift}>
                            Deadlift
                        </Button>

                    </Flex>

                    <Flex justify='center'>

                        <Button h='100px' w='275px' mt='10px' mb='10px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                        onClick={handleLiftSubmitPress}>
                            Shoulder Press
                        </Button>

                    </Flex>

                
                
            </Card>
    )
    }
}

export default NewWorkout