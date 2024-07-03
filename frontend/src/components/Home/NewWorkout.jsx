import { Container, Card, CardHeader, Button, Text, Input } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function NewWorkout () {

    {/* Button Variable */}
    const [newWorkout, setNewWorkout] = useState(false)
    const [typeSelected, setTypeSelected] = useState(false)
    const [runSelected, setRunSelected] = useState(false)
    const [liftSelected, setLiftSelected] = useState(false)
    
    {/* Form Variables */}
    const [workoutSelected, setWorkoutSelected] = useState('')
    const [runDetails, setRunDetails] = useState('')
    const [lift1, setLift1] = useState('')
    const [lift1Details, setLift1Details] = useState('')
    const [lift2, setLift2] = useState('')
    const [lift2Details, setLift2Details] = useState('')
    const [lift3, setLift3] = useState('')
    const [lift3Details, setLift3Details] = useState('')
    const [lift4, setLift4] = useState('')
    const [lift4Details, setLift4Details] = useState('')
    const [lift5, setLift5] = useState('')
    const [lift5Details, setLift5Details] = useState('')
    const [lift6, setLift6] = useState('')
    const [lift6Details, setLift6Details] = useState('')

    {/* Render Variables */}
    const [renderWorkoutSelected, setRenderWorkoutSelected] = useState('')
    const [renderRunDetails, setRenderRunDetails] = useState('')
    const [renderLift1, setRenderLift1] = useState('')
    const [renderLift1Details, setRenderLift1Details] = useState('')
    const [renderLift2, setRenderLift2] = useState('')
    const [renderLift2Details, setRenderLift2Details] = useState('')
    const [renderLift3, setRenderLift3] = useState('')
    const [renderLift3Details, setRenderLift3Details] = useState('')
    const [renderLift4, setRenderLift4] = useState('')
    const [renderLift4Details, setRenderLift4Details] = useState('')
    const [renderLift5, setRenderLift5] = useState('')
    const [renderLift5Details, setRenderLift5Details] = useState('')
    const [renderLift6, setRenderLift6] = useState('')
    const [renderLift6Details, setRenderLift6Details] = useState('')
    

    {/* Handling buttons within new workout panel */}

    const handleNewWorkout = () => {
        setNewWorkout(true)
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

    const handleSubmit = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
        postNewWorkout()
    }

    const handleBackNewWorkout = () => {
        setNewWorkout(false)
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
            setRenderLift1(response.data[response.data.length-1].lift1)
            setRenderLift1Details(response.data[response.data.length-1].lift1Details)
            setRenderLift2(response.data[response.data.length-1].lift2)
            setRenderLift2Details(response.data[response.data.length-1].lift2Details)
            setRenderLift3(response.data[response.data.length-1].lift3)
            setRenderLift3Details(response.data[response.data.length-1].lift3Details)
            setRenderLift4(response.data[response.data.length-1].lift4)
            setRenderLift4Details(response.data[response.data.length-1].lift4Details)
            setRenderLift5(response.data[response.data.length-1].lift5)
            setRenderLift5Details(response.data[response.data.length-1].lift5Details)
            setRenderLift6(response.data[response.data.length-1].lift6)
            setRenderLift6Details(response.data[response.data.length-1].lift6Details)

        })
    }

    const postNewWorkout = async () => {

        let workoutData = new FormData()

        workoutData.append('workoutSelected', workoutSelected)
        workoutData.append('runDetails', runDetails)
        workoutData.append('lift1', lift1)
        workoutData.append('lift1Details', lift1Details)
        workoutData.append('lift2', lift2)
        workoutData.append('lift2Details', lift2Details)
        workoutData.append('lift3', lift3)
        workoutData.append('lift3Details', lift3Details)
        workoutData.append('lift4', lift4)
        workoutData.append('lift4Details', lift4Details)
        workoutData.append('lift5', lift5)
        workoutData.append('lift5Details', lift5Details)
        workoutData.append('lift6', lift6)
        workoutData.append('lift6Details', lift6Details)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/newWorkout',
            data: workoutData
        }).then((response) => {
            console.log(response)
        })
    }

    const pageLoad = () => {
        getMostRecentWorkout()
    }

    useEffect(() => {
        pageLoad();
    }, [])

    if (newWorkout == false & renderWorkoutSelected == 'Run') {
        pageLoad();
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='blue.800' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='25px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='75px' h='250px'>
                    <Text fontSize='27.5px' color='blue.800'>{renderRunDetails}</Text>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == false & renderWorkoutSelected == 'Lift') {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' color='blue.800' fontWeight='bold'>Upcoming workout details</CardHeader>
                <CardHeader fontSize='40px' mb='25px' color='#54D3B2' fontWeight='bold'>{renderWorkoutSelected}</CardHeader>
                <Container mb='75px'>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift1} -- {renderLift1Details}</Text>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift2} -- {renderLift2Details}</Text>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift3} -- {renderLift3Details}</Text>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift4} -- {renderLift4Details}</Text>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift5} -- {renderLift5Details}</Text>
                    <Text fontSize='27.5px' color='blue.800'>{renderLift6} -- {renderLift6Details}</Text>
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
                    <Input variant='outline' mb='75px' h='250px' outlineColor='black' fontSize='25px' align='center' justify='center' onChange={(e) => setRunDetails(e.target.value)}></Input>
                </Container>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold' mt='15px'
                    onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Card>
    )
    } else if (newWorkout == true & typeSelected == true & liftSelected == true) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackWorkoutType}>Back</Button>
                </Container> 
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please provide the lift details</CardHeader>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift1(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift1Details(e.target.value)}></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift2(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift2Details(e.target.value)}></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift3(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift3Details(e.target.value)}></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift4(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift4Details(e.target.value)}></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift5(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift5Details(e.target.value)}></Input>
                </Container>
                                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px' onChange={(e) => setLift6(e.target.value)}></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px' onChange={(e) => setLift6Details(e.target.value)}></Input>
                </Container>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' fontSize='35px' fontWeight='bold' borderWidth='1px' borderColor='blue.800' mt='15px'
                    onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Card>
    )
    }
}

export default NewWorkout