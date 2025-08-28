import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center, Flex, Link } from '@chakra-ui/react'
import Header from '../Header'

function WorkoutLog () {

    const [currentToken, setCurrentToken] = useState('816a97d6259e5ad432e494a9e2a56ae00d9f97de');
    const [currentRefreshToken, setCurrentRefreshToken] = useState();
    const [tokenExpiration, setTokenExpiration] = useState()
    const clientID = '121616'
    const clientSecret = 'c47643840109957442fd14d008ed1197355ee2e1'
    const userEmail = 'josh+testAuth@test.com'
    const [request, setRequest] = useState("Not Recieved");
    const [activityId, setActivityId] = useState();
    const [activityName, setActivityName] = useState();
    const [startDate, setStartDate] = useState();
    const [sportType, setSportType] = useState();
    const [description, setDescription] = useState();
    const [distance, setDistance] = useState();
    const [movingTime, setMovingTime] = useState();
    const [averageSpeed, setAverageSpeed] = useState();
    const [maxSpeed, setMaxSpeed] = useState();
    const [workoutData, setWorkoutData] = useState();

    const currentTime = Date.now()

    if(currentTime > 1742322574) {
        console.log("still active")
    }

    const getCurrentToken = () => {

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/stravaAuth',
        }).then((response) => {

            setCurrentToken(response.data[0].accessToken)
            setCurrentRefreshToken(response.data[0].refreshToken)
            setTokenExpiration(response.data[0].tokenExpiration)

        })
    }

    const getRefreshToken = async () => {

        await axios({
            method: 'get',
            url: `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${currentRefreshToken}`
        }).then((response) => {
            setCurrentToken(response.data.access_token)
            setCurrentRefreshToken(response.data.refresh_token)
            setTokenExpiration(response.data.expires_at)
        }).then(await postNewToken())
    }

    const postNewToken = async () => {

        let tokenData = new FormData()

        tokenData.append('accessToken', currentToken)
        tokenData.append('refreshToken', currentRefreshToken)
        tokenData.append('tokenExpiration', tokenExpiration)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/stravaAuth',
            data: tokenData,
        }).then((response) => {
            console.log(response)
        }).then(await activityRequest())
    }


    const activityRequest = async () => {
         
        axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/athlete/activities?access_token=${currentToken}`,
        }).then((response) => {
            console.log(response)
            setActivityId(response.data[0].id)
            console.log(activityId)
        }).catch((error) => {
            console.log(error)
        })
    }

    const activityDetails = async () => {

        await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${activityId}?include_all_efforts=""&access_token=${currentToken}`,
        }).then((response) => {
            
            console.log(response.data)
            console.log(response.data.splits_standard)
            setStartDate(response.data.start_date)
            setActivityName(response.data.name)
            setAverageSpeed(response.data.average_speed)
            setDescription(response.data.description)
            setDistance(response.data.distance)
            setSportType(response.data.sport_type)
            setMovingTime(response.data.moving_time)
            setMaxSpeed(response.data.max_speed)

            if(sportType=='WeightTraining') {
                setSportType("Weight Training")
            }

            for(let i in response.data.splits_standard) {
                console.log(i)
            }
 
        }).then(await postWorkoutDetails())

    } 

    const postWorkoutDetails = async () => {

        {/*let postData = new FormData()

        postData.append('activityId', activityId)
        postData.append('activityName', activityName)
        postData.append('startDate', startDate)
        postData.append('sportType', sportType)
        postData.append('description', description)
        postData.append('distance', distance)
        postData.append('movingTime', movingTime)
        postData.append('averageSpeed', averageSpeed)
        postData.append('maxSpeed', maxSpeed)

        console.log(postData)*/}

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/workoutLog',
            data: workoutDetails,
        }).then((response) => {
            console.log(response.data)
        })
    }


    const getWorkoutDetails = async () => {

        await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/workoutLog'
        }).then((response) => {
            setWorkoutData(response.data)
            setRequest("Received")
            console.log(workoutData)
        })
    }

    const pageLoad = () => {
        getCurrentToken()

        if (currentTime>tokenExpiration) {
            getRefreshToken();
        } else {
            activityRequest()
        }

        {/*postWorkoutDetails();*/}
        getWorkoutDetails()
    }


    {/*postWorkoutDetails()*/}

    useEffect(() => { 
        pageLoad();
    },[])




    if (request == "Received") {
        return (
            <>
                <div><Header /></div>
                <Flex justify='center' borderStyle='solid' borderWidth='1px' bgColor='rgb(24, 112, 200)' bgGradient='linear-gradient(to right,rgb(30, 44, 70), rgb(30, 44, 70),  rgb(30, 44, 70), rgb(42, 110, 144),#54D3B2)' h='250px' align='center' mt='100px'>
                <Heading fontSize='100px' color='#c9def7'>Run Log</Heading>
                </Flex>
                <Flex justify='center' mt='15px'>
                <Link fontSize='25px' color='#FC4C02' href='https://developers.strava.com/'>Powered by the Strava API</Link>
                </Flex>
                <Center>
                <SimpleGrid columns={2} p={5} m='25px'>
                    {workoutData.map((workout) => (
                        <Card key={workout} h='1000px' w='850px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                            <CardHeader mt='25px'>
                            <Heading fontSize='60px' color='#c9def7'> {workout.activityName}</Heading>
                            </CardHeader>
                            <CardBody ml='150px' mr='150px'>
                                <Text fontSize='50px' mb='25px'>{workout.sportType=="Run" ? ("🏃") : ("🏋️‍♂️")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>Date</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{(workout.startDate)}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>Workout Type</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="WeightTraining" ? ("Weight Training") : ("Run")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7' mr='25px' ml='25px'>{workout.sportType=="Run" ? ("Distance") : ("Description")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${Math.round((workout.distance * 0.000621371) * 100) / 100} miles`) : (`${workout.description}`)}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Elapsed Time") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${Math.round(workout.movingTime/60)} mins`) : ("")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Max Speed") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${Math.round(workout.maxSpeed * 2.23694 * 100) / 100} mph`) : ("")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Average Speed") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${Math.round(workout.averageSpeed * 2.23694 * 100) / 100} mph`) : ("")}</Text>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
                </Center>
            </>
        )
    } 
} 

export default WorkoutLog