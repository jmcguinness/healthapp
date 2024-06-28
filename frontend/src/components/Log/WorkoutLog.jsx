import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center } from '@chakra-ui/react'

function WorkoutLog () {

    const [currentToken, setCurrentToken] = useState('d5313e00d314358a773e8804b2f3567e5a38f8a8');
    const [refreshToken, setRefreshToken] = useState('10278ede8114c2cb3b7d5ac2ee23fa36bf04347d');
    const clientID = '121616'
    const clientSecret = 'c47643840109957442fd14d008ed1197355ee2e1'
    const [request, setRequest] = useState("Not Recieved");
    const [activityId, setActivityId] = useState();
    const [activityName, setAcivityName] = useState();
    const [startDate, setStartDate] = useState();
    const [sportType, setSportType] = useState();
    const [description, setDescription] = useState();
    const [distance, setDistance] = useState();
    const [movingTime, setMovingTime] = useState();
    const [averageSpeed, setAverageSpeed] = useState();
    const [maxSpeed, setMaxSpeed] = useState();
    const [workoutData, setWorkoutData] = useState();
    
    const currentTime = Date.now
    const [tokenExpiration, setTokenExpiration] = useState();

    const emjoi = [
        {
            "Run": "🏃"
        },
        {
            "Weight Training": "🏋️‍♂️"
        }
    ]

    const workoutDetails = [
        {
            "activityId": 106942755,
            "activityName": "Morning Run",
            "startDate": "2024-06-16T10:47:23Z",
            "sportType": "Run",
            "description": "Run",
            "distance": "6438.0",
            "movingTime": "2342",
            "averageSpeed": "2.749",
            "maxSpeed": "5.494",
        }
    ]

    const postWorkoutDetails = async () => {

        console.log(workoutDetails)

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/workoutLog',
            data: workoutDetails[0],
        }).then((response) => {
            console.log(response.data)
        })
    }

    const pageLoad = () => {
        activityRequest();
    }

    const getWorkoutDetails = async () => {

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/workoutLog'
        }).then((response) => {
            setWorkoutData(response.data)
            console.log(workoutData)
        })
    }

    const getNewToken = () => {

        axios({
            method: 'post',
            url: `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}&scope=activity:read_all`
        }).then((response) => {
            console.log(response)
        })
    }

    const activityRequest = async () => {
         
            axios({
                method: 'get',
                url: `https://www.strava.com/api/v3/athlete/activities?access_token=${currentToken}`,
            }).then((response) => {
                console.log(response)
                setActivityId(response.data[0].id)
                console.log(activityId)
                setRequest("Received")
            }).catch((error) => {
                console.log(error)
            })
    }

    {/*const activityDetails = async () => {

        await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${activityID}?include_all_efforts=""&access_token=999d8613243f5f0f350682d04de4673ab4bcbd73`,
        }).then((response) => {
            
            console.log(response)
            setStartDateLocal(response.data.start_date_local)
            setName(response.data.name)
            setAverageSpeed(response.data.average_speed)
            setDescription(response.data.description)
            setDistance(response.data.distance)
            setSportType(response.data.sport_type)
            setMovingTime(response.data.moving_time)
            setMaxSpeed(response.data.max_speed)
 
        }).then(await postStravaData())

    } 

    useEffect(() => { 
        activityRequest();
    },[]) */}

    {/*postWorkoutDetails()*/}

    useEffect(() => { 
        pageLoad();
    },[])


    return (
            <Center>
            <SimpleGrid columns={2} p={5} m='25px'>
                {workoutDetails.map((workout) => (
                    <Card key={workout} h='800px' w='700px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#1b305b' bgColor='#f4f6fa'>
                        <CardHeader mt='25px'>
                        <Heading fontSize='60px' color='#1b305b'> {workout.activityName}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='50px' mb='25px'>🏋️</Text>
                            <Text fontSize='35px' fontWeight='bold' color='#1b305b'>Date</Text>
                            <Text fontSize='30px' mb='25px'>{workout.startDate}</Text>
                            <Text fontSize='35px' fontWeight='bold' color='#1b305b'>Workout Type</Text>
                            <Text fontSize='30px' mb='25px'>{workout.sportType}</Text>
                            <Text fontSize='35px' fontWeight='bold' color='#1b305b'>Workout Details</Text>
                            <Text fontSize='30px' mb='25px'>{workout.description}</Text>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
            </Center>
    )
}

export default WorkoutLog