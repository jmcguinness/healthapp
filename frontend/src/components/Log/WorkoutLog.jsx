import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center, Flex, Link } from '@chakra-ui/react'
import Header from '../Header'

function WorkoutLog () {

    const [currentToken, setCurrentToken] = useState();
    const [currentRefreshToken, setCurrentRefreshToken] = useState();
    const [tokenExpiration, setTokenExpiration] = useState()
    const [tokenData, setTokenData] = useState(null)
    const [refreshRequired, setRefreshRequired] = useState()
    const [refreshCallComplete, setRefreshCallComplete] = useState()
    const [needActivityCompleted, setNeedActivityCompleted] = useState()
    const [activityDetailsCompleted, setActivityDetailsCompleted] = useState()
    const [retreivedCurrentWorkouts, setRetreivedCurrentWorkouts] = useState()
    const [clientID, setClientID] = useState();
    const [clientSecret, setClientSecret] = useState();
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
    const [tokenInfo, setTokenInfo] = useState(null)
    const [currentWorkoutID, setCurrentWorkoutID] = useState([]);
    const postData = []
    const [runSum, setRunSum] = useState(0)
    const databaseWorkoutID = []
    const runningDistance = []
    const needActivity = []
    const receivedActivityDetails = []

    const currentTime = Date.now()
    const currentYear = new Date().getFullYear()


    {/*Get current token details from database and check if still valid*/}

    const getTokenDetails = () => {

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/stravaAuth'
        }).then((response) => {

            setCurrentToken(response.data.accessToken)
            setCurrentRefreshToken(response.data.refreshToken)
            setClientID(response.data.clientID)
            setClientSecret(response.data.clientSecret)
            setTokenExpiration(response.data.tokenExpiration)
            setTokenData(response.data)

            if(response.data.tokenExpiration > currentTime) {
                getCurrentWorkouts();
                console.log(response.data.tokenExpiration, currentTime)
            }

        }).then()
    }
    
    useEffect(() => {
        getTokenDetails()
    },[])

    console.log(currentRefreshToken)

    {/*Refresh the token and set variables*/}

    useEffect(() => { 
        const refreshToken = async () => {
            if(tokenExpiration < currentTime) {

                await axios({
                    method: 'post',
                    url: `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${currentRefreshToken}`
                }).then((response) => {
                    setCurrentToken(response.data.access_token)
                    setCurrentRefreshToken(response.data.refresh_token)
                    setTokenExpiration(response.data.expires_at)
                    setRefreshCallComplete('True')
                }).then()   
            }
            }
        refreshToken()
    }, [clientID, clientSecret, currentRefreshToken])

    {/*Post new token info to the database*/}

    useEffect(() => { 

        const postTokenInfo = async () => {
            if(refreshCallComplete =='True'){

                let tokenData = new FormData()

                tokenData.append('accessToken', currentToken)
                tokenData.append('refreshToken', currentRefreshToken)
                tokenData.append('tokenExpiration', tokenExpiration)
                tokenData.append('clientID', clientID)
                tokenData.append('clientSecret', clientSecret)

                await axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/stravaAuth',
                    data: tokenData,
                }).then((response) => {
                    console.log(response)
                }).then(getCurrentWorkouts())
            }
        }
        postTokenInfo();
    }, [refreshCallComplete])

    {/*Create array of workout ID's already present in database*/}

    const getCurrentWorkouts = () => {

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/workoutLog'
        }).then((response) => {
            console.log(response.data)
            for(const item in response.data){
                runningDistance.push(response.data[item].distance)
                if(databaseWorkoutID.includes(response.data[item].activityId) === false){
                databaseWorkoutID.push(response.data[item].activityId)
                }
            }
            setRunSum(Math.round((runningDistance.reduce((accumulator, currentValue) => accumulator + currentValue, 0) * 0.000621371) * 100) / 100)
            console.log('Already Included')
            console.log(databaseWorkoutID)
            console.log(runningDistance)
        }).then(setRetreivedCurrentWorkouts('True'))
    }


    {/*Get all Activity ID's from strava and compare to backend array to identify activities that need to be added*/}

    useEffect(() => { 
        const activityRequest =async () => {
            
            axios({
                method: 'get',
                url: `https://www.strava.com/api/v3/athlete/activities?access_token=${currentToken}`,
            }).then((response) => {
                console.log(response)
                setActivityId(response.data[0].id)
                console.log(activityId)

                if(response.status==200) {
                    console.log(200)
                }
                if(response.status==200) {
                    for(const item in response.data){
                        if(databaseWorkoutID.includes(response.data[item].id) === false){
                            axios({
                                method: 'get',
                                url: `https://www.strava.com/api/v3/activities/${response.data[item].id}?include_all_efforts=""&access_token=${currentToken}`,
                            }).then((response) => {

                                postData.push(response.data)

                            })

                        }

                    }

                }
            }).then((postData) =>{
                for(const item in postData){
                    console.log(item)
                }
            }).catch((error) => {
                console.log(error)
            }).then(
                
            ).then()

        }
        activityRequest();
    }, [retreivedCurrentWorkouts])



    {/*Loop through needed activity id's and call strava for necessary activity details*/}

    useEffect(() => { 

            const postWorkouts = async () => {

                for(const i in postData) {

                    let newPost = new FormData()

                    newPost.append('activityId', i.id)
                    newPost.append('activityName', i.name)
                    newPost.append('startDate', i.start_date)
                    newPost.append('sportType', i.type)
                    newPost.append('description', i.description)
                    newPost.append('distance', i.distance)
                    newPost.append('movingTime', i.moving_time)
                    newPost.append('averageSpeed', i.average_speed)
                    newPost.append('maxSpeed', i.max_speed)

                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/workoutLog',
                        data: newPost,
                    }).then((response) => {
                        console.log(response.data)
                    })
                }
                setActivityDetailsCompleted('True')
            }
            
            postWorkouts()
    }, [postData])

    {/*useEffect(() => { 
        const activityDetails = async () => {

            for(const item of needActivity){
                await axios({
                method: 'get',
                url: `https://www.strava.com/api/v3/activities/${item}?include_all_efforts=""&access_token=${currentToken}`,
            }).then((response) => {
                
                console.log(response.data)
                receivedActivityDetails.append(response.data)
                console.log(`API call for ${item} was successful`)
                console.log(receivedActivityDetails)
            }).then(getWorkoutDetails())
            }    
        }
        activityDetails()
    }, [needActivityCompleted])*/}

    {/*const postWorkoutDetails = async () => {

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
            data: workoutDetails,
        }).then((response) => {
            console.log(response.data)
        })
    }*/}

    useEffect(() => { 
        if(activityDetailsCompleted=='True') {
            const getWorkoutDetails = async () => {

                await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/workoutLog'
                }).then((response) => {
                    setWorkoutData(response.data)
                    console.log(response.data)

                        
                    setRequest("Received")
                })
                
            }
        getWorkoutDetails()
        }
    }, [activityDetailsCompleted])



    {/*const pageLoad = () => {
        getTokenDetails()
    }*/}


    {/*postWorkoutDetails()*/}

    {/*useEffect(() => { 
        pageLoad();
    },[])*/}




    if (request == 'Received') {
        return (
            <>
                <div><Header /></div>
                <Flex justify='center' borderStyle='solid' borderWidth='1px' bgColor='rgb(24, 112, 200)' bgGradient='linear-gradient(to right,rgb(30, 44, 70), rgb(30, 44, 70),  rgb(30, 44, 70), rgb(42, 110, 144),#54D3B2)' h='250px' align='center' mt='100px'>
                <Heading fontSize='100px' color='#c9def7'>Run Log</Heading>
                </Flex>
                <Flex justify='center' mt='15px'>
                <Link fontSize='25px' color='#FC4C02' href='https://developers.strava.com/'>Powered by the Strava API</Link>
                </Flex>
                <Flex justify='center' mt='50px'>

                    <Card h='200px' w='400px' bgGradient='linear-gradient(to right, #141e30, #243b55)' borderStyle='solid' borderWidth='2px' borderColor='#c9def7'>
                        <Text color='#c9def7' fontSize='35px' mt='10px' fontWeight='bold'>Milage This Year</Text>
                        <Text color='#c9def7' fontSize='75px' >{runSum}</Text>
                    </Card>

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