import { Card, CardHeader, Input, Text, Container, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Button } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function LiftingDashboard () {

    const [liftUpdate, setLiftUpdate] = useState(false)
    const [liftSelected, setLiftSelected] = useState(false)
    const [liftValue, setLiftValue] = useState()
    const [received, setReceived] = useState(false)
    
    const[bench, setBench] = useState()
    const[press, setPress] = useState()
    const[squat, setSquat] = useState()
    const[deadlift, setDeadlift] = useState()

    const[renderBench, setRenderBench] = useState()
    const[renderPress, setRenderPress] = useState()
    const[renderSquat, setRenderSquat] = useState()
    const[renderDeadlift, setRenderDeadlift] = useState()

    const [benchDiff, setBenchDiff] = useState()
    const [benchType, setBenchType] = useState()
    const [pressDiff, setPressDiff] = useState()
    const [pressType, setPressType] = useState()
    const [squatDiff, setSquatDiff] = useState()
    const [squatType, setSquatType] = useState()
    const [deadliftDiff, setDeadliftDiff] = useState()
    const [deadliftType, setDeadliftType] = useState()

    const handleUpdate = () => {
        setLiftUpdate(true)
    }

    const handleBenchChange = () => {
        setLiftSelected("Bench")
    }

    const handleSquatChange = () => {
        setLiftSelected("Squat")
    }

    const handlePressChange = () => {
        setLiftSelected("Press")
    }

    const handleDeadliftChange = () => {
        setLiftSelected("Deadlift")
    }

    const handleSubmit = () => {
        setUpdatedStats();
        setLiftUpdate(false)
    }

    const handleBackLiftSelection = () => {
        setLiftUpdate(false)
    }

    const handleBackLiftValue = () => {
        setLiftSelected(false)
    }

    const getStats = async () => {

        await axios ({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/liftingDashboard'
        }).then((response) => {
            
            setRenderBench(response.data[0].bench)
            setRenderPress(response.data[0].press)
            setRenderSquat(response.data[0].squat)
            setRenderDeadlift(response.data[0].deadlift)
            setReceived(true)

            if(response.data[0].bench>response.data[1].bench) {
                setBenchType('increase')
                setBenchDiff(Math.round((response.data[0].bench/response.data[1].bench *100)-100)+'%')
            } else if(response.data[0].bench<response.data[1].bench) {
                setBenchType('decrease')
                setBenchDiff(Math.round((1 - response.data[0].bench/response.data[1].bench) * 100)+'%')
            } else {
                setBenchType()
                setBenchDiff('0%')
            }

            if(response.data[0].press>response.data[1].press) {
                setPressType('increase')
                setPressDiff(Math.round((response.data[0].press/response.data[1].press *100)-100)+'%')
            } else if(response.data[0].press<response.data[1].press) {
                setPressType('decrease')
                setPressDiff(Math.round((1 - response.data[0].press/response.data[1].press) * 100)+'%')
            } else {
                setPressType('')
                setPressDiff('0%')
            }

            if(response.data[0].squat>response.data[1].squat) {
                setSquatType('increase')
                setSquatDiff(Math.round((response.data[0].squat/response.data[1].squat *100)-100)+'%')
            } else if(response.data[0].squat<response.data[1].squat) {
                setSquatType('decrease')
                setSquatDiff(Math.round((1 - response.data[0].squat/response.data[1].squat) * 100)+'%')
            } else {
                setSquatType('')
                setSquatDiff('0%')
            }

            if(response.data[0].deadlift>response.data[1].deadlift) {
                setDeadliftType('increase')
                setDeadliftDiff(Math.round((response.data[0].deadlift/response.data[1].deadlift *100)-100)+'%')
            } else if(response.data[0].deadlift<response.data[1].deadlift) {
                setDeadliftType('decrease')
                setDeadliftDiff(Math.round((1 - response.data[0].deadlift/response.data[1].deadlift) * 100)+'%')
            } else {
                setDeadliftType('')
                setDeadliftDiff('0%')
            }

        })
    }

    const setUpdatedStats = async () => {

        if(liftSelected=="Bench") {
            setBench(liftValue)
            setSquat(renderSquat)
            setPress(renderPress)
            setDeadlift(renderDeadlift)
            console.log(renderBench, renderSquat, renderPress, renderDeadlift)
        }
        
        if (liftSelected=="Squat") {
            setSquat(liftValue)
            setBench(renderBench)
            setPress(renderPress)
            setDeadlift(renderDeadlift)
            console.log(renderBench, renderSquat, renderPress, renderDeadlift)
        } 
        
        if (liftSelected=="Press") {
            setPress(liftValue)
            setSquat(renderSquat)
            setBench(renderBench)
            setDeadlift(renderDeadlift)
            console.log(renderBench, renderSquat, renderPress, renderDeadlift)
        }
        
        if (liftSelected=="Deadlift") {
            setDeadlift(liftValue)
            setSquat(renderSquat)
            setPress(renderPress)
            setBench(renderBench)
            console.log(renderBench, renderSquat, renderPress, renderDeadlift)
        }

        postUpdatedStats()
    }


    const postUpdatedStats = async () => {

        let postData = new FormData()

        postData.append('bench', bench)
        postData.append('press', press)
        postData.append('squat', squat)
        postData.append('deadlift', deadlift)

        console.log(postData)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/liftingDashboard',
            data: postData
        }).then((response) => {
            console.log(response)
        })
    }

    const pageLoad = () => {
        getStats()
    }

    useEffect(() => {
        pageLoad()
    })

    if (liftUpdate == false) {
        return (
            <>

            <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' mr='100px'>

                <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Strength Stats</CardHeader>

                <Button backgroundColor='#54D3B2' h='100px' w='250px' color='#243b55' fontSize='35px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='blue.800' onClick={handleUpdate}>Update Lifts</Button>


                <Container mt='50px'>
                    <StatGroup>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Bench Press</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderBench}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type={benchType} />
                            {benchDiff}
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Overhead Press</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderPress}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type={pressType} />
                            {pressDiff}
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                    <StatGroup mt='50px'>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Squat</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderSquat}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type={squatType} />
                            {squatDiff}
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Deadlift</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderDeadlift}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type={deadliftType} />
                            {deadliftDiff}
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                </Container>
            </Card>  
            </>

        )} else if (liftUpdate == true && liftSelected == false) {
            return (
                <>

                <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' mr='100px'>

                    <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2'>Strength Stats</CardHeader>

                    

                        <CardHeader fontSize='30px' w='750px' mb='25px' color='blue.800'>Please select the lift you would like to update</CardHeader>

                        <Container display='flex' flexDir='column' align='center' justify='center' mt='10px' mb='10px'>

                        <Container>
                            <Button h='90px' w='175px' mr='15px' mb='30px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='30px' fontWeight='bold'
                            onClick={handleBenchChange}>
                                Bench
                            </Button>

                            <Button h='90px' w='175px' ml='15px' mb='30px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='30px' fontWeight='bold'
                            onClick={handleSquatChange}>
                                Squat
                            </Button>
                        </Container>

                        <Container>
                            <Button h='90px' w='175px' mr='15px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='30px' fontWeight='bold'
                            onClick={handlePressChange}>
                                Press
                            </Button>

                            <Button h='90px' w='175px' ml='15px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='30px' fontWeight='bold'
                            onClick={handleDeadliftChange}>
                                Deadlift
                            </Button>
                        </Container>

                        <Container>
                            <Button h='75px' w='175px' mt='60px' mr='15px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackLiftSelection}>Back</Button>
                            
                        </Container>
                        
                    </Container>
                </Card>  
                </>
            )
        } else if (liftUpdate == true & liftSelected != false) {
            return (
                <>

                <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' mr='100px'>

                    <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Strength Stats</CardHeader>

                    <Container display='flex' flexDir='column' align='center' justify='center' mt='25px'>

                        <Container display='flex'>
                            <Container>
                                <Text color='#243b55' fontSize='35px' mb='20px' fontWeight='bold' w='250px'>{liftSelected}</Text>

                                <Input  variant='outline' mb='20px' h='65px' w='100px' outlineColor='black' fontSize='25px'  onChange={(e) => setLiftValue(e.target.value)}></Input>
                            </Container>
                        </Container>

                        <Container>
                            <Button h='75px' w='175px' mt='50px' mr='15px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800' onClick={handleBackLiftValue}>Back</Button>
                            <Button backgroundColor='#54D3B2' h='75px' w='175px' mt='50px' ml='15px' color='#243b55' fontSize='35px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='blue.800' onClick={handleSubmit}>Submit</Button>
                        </Container>
                        
                    </Container>
                </Card>  
                </>
            )
        }
}

export default LiftingDashboard