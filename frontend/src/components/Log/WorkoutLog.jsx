import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center } from '@chakra-ui/react'

function WorkoutLog () {

    const [current_token, setCurrentToken] = useState();
    const [request, setRequest] = useState("Not Recieved");
    const [activityID, setActivityID] = useState("");
    const [newActivityDetails, setNewActivityDetails] = useState();

    const current_time = Date.now

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
            "workoutType": "Weight Training",
            "workoutDate": "06/22/2024",
            "workoutDetails": "Bench Press"
        },
        {
            "workoutType": "Run",
            "workoutDate": "06/23/2024",
            "workoutDetails": "4 mile run"
        },
        {
            "workoutType": "Run",
            "workoutDate": "06/23/2024",
            "workoutDetails": "4 mile run"
        },
    ]

    const refreshToken = async () => {

        const request_token = await fetch("https://www.strava.com/oauth/token?client_id=121616&client_secret=c47643840109957442fd14d008ed1197355ee2e1&grant_type=refresh_token&refresh_token=6de52c92a33931d1c5373e74d499cb36fed9e67f&scope=activity:read_all", requestOptionsPost)
        const request_token_data = await request_token.json()
        setCurrentToken(request_token_data.access_token)

    }

    const activityRequest = async () => {
         
        axios({
            method: 'get',
            url: "https://www.strava.com/api/v3/athlete/activities?access_token=999d8613243f5f0f350682d04de4673ab4bcbd73",
        }).then((response) => {
            console.log(response)
            setActivityID(response.data[4].id)
            setRequest("Received")
        }).then(activityDetails()
        ).catch((error) => {
            console.log(error)
            refreshToken();
        })
 
    }

    const activityDetails = async () => {

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
    },[])

    return (
            <Center>
            <SimpleGrid columns={2} p={5} m='25px'>
                {workoutDetails.map((workout) => (
                    <Card key={workout} h='800px' w='700px'  m='25px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#1b305b' bgColor='#f4f6fa'>
                        <CardHeader mt='25px'>
                        <Heading fontSize='60px' color='#1b305b'> {workout.workoutType}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='50px' mb='25px'>🏋️</Text>
                            <Text fontSize='35px' fontWeight='bold' color='#1b305b'>Date</Text>
                            <Text fontSize='30px' mb='25px'>{workout.workoutDate}</Text>
                            <Text fontSize='35px' fontWeight='bold' color='#1b305b'>Workout Details</Text>
                            <Text fontSize='30px' mb='25px'>{workout.workoutDetails}</Text>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
            </Center>
    )
}

export default WorkoutLog