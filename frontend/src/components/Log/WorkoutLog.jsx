import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center } from '@chakra-ui/react'
import Header from '../Header'

function WorkoutLog () {

    const [currentToken, setCurrentToken] = useState('d5313e00d314358a773e8804b2f3567e5a38f8a8');
    const [refreshToken, setRefreshToken] = useState('10278ede8114c2cb3b7d5ac2ee23fa36bf04347d');
    const clientID = '121616'
    const clientSecret = 'c47643840109957442fd14d008ed1197355ee2e1'
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
    const [tokenExpiration, setTokenExpiration] = useState(0);

    const workoutDetails = [
        {
            "activityId": 10817212404,
            "activityName": "Upper Body Workout",
            "startDate": "2023-10-20T17:47:21Z",
            "sportType": "WeightTraining",
            "description": "Bench (3x5) 115* Inc DB press (3x10) 35* row (3x5) 50 Lat pull down (3x10) 42.5* Over press (5x8) - 35* Curl 25db Tri pull down (3x10) 35",
            "distance": "20.0",
            "movingTime": "3600",
            "averageSpeed": "0.0",
            "maxSpeed": "0",
        }
    ]

    const checkToken = () => {

        console.log(currentTime)
        console.log(tokenExpiration)
        if (currentTime > tokenExpiration) {
            getNewToken();
        } else {
            activityRequest();
        }
    }

    const getNewToken = () => {

        axios({
            method: 'post',
            url: `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}&scope=activity:read_all`
        }).then((response) => {
            console.log(response)
            setCurrentToken(response.data.access_token)
            console.log(currentToken)
            setRefreshToken(response.data.refresh_token)
            setTokenExpiration(response.data.expires_at)
        }).then(
            activityRequest()
        )
    }

    const pageLoad = () => {
        postWorkoutDetails();
        checkToken();
        getWorkoutDetails()
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
        }).then(await activityDetails())
    }

    const activityDetails = async () => {

        await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${activityId}?include_all_efforts=""&access_token=${currentToken}`,
        }).then((response) => {
            
            console.log(response.data)
            setStartDate(response.data.start_date)
            setActivityName(response.data.name)
            setAverageSpeed(response.data.average_speed)
            setDescription(response.data.description)
            setDistance(response.data.distance)
            setSportType(response.data.sport_type)
            setMovingTime(response.data.moving_time)
            setMaxSpeed(response.data.max_speed)
 
        }).then(await postWorkoutDetails())

    } 

    const postWorkoutDetails = async () => {

        let postData = new FormData()

        postData.append('activityId', activityId)
        postData.append('activityName', activityName)
        postData.append('startDate', startDate)
        postData.append('sportType', sportType)
        postData.append('description', description)
        postData.append('distance', distance)
        postData.append('movingTime', movingTime)
        postData.append('averageSpeed', averageSpeed)
        postData.append('maxSpeed', maxSpeed)

        console.log(postData)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/workoutLog',
            data: postData,
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


    {/*postWorkoutDetails()*/}

    useEffect(() => { 
        pageLoad();
    },[])




    if (request == "Received") {
        return (
            <>
                <div><Header /></div>
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
                                <Text fontSize='30px' mb='15px' color='white'>{workout.startDate}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>Workout Type</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7' mr='25px' ml='25px'>{workout.sportType=="Run" ? ("Distance") : ("Description")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${workout.distance}`) : (`${workout.description}`)}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Elapsed Time") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${workout.movingTime}`) : ("")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Max Speed") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${workout.maxSpeed}`) : ("")}</Text>
                                <Text fontSize='35px' fontWeight='bold' color='#c9def7'>{workout.sportType=="Run" ? ("Average Speed") : ("")}</Text>
                                <Text fontSize='30px' mb='15px' color='white'>{workout.sportType=="Run" ? (`${workout.averageSpeed}`) : ("")}</Text>
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