from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import status, generics
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from api.models import WorkoutLog, NewWorkout, LiftStats, StravaAuth
from api.serializers import WorkoutLogSerializers, NewWorkoutSerializers, UserSerializers, liftStatsSerializer, StravaAuthSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from django.contrib.sessions.models import Session
from datetime import datetime
from django.views.decorators.csrf import ensure_csrf_cookie

### Application Views ###

class Log(APIView):

    serializer_class = WorkoutLogSerializers

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            activityId = serializer.data.get('activityId')
            activityName = serializer.data.get('activityName')
            startDate = serializer.data.get('startDate')
            format_date = datetime.strptime(startDate, "%Y-%m-%dT%H:%M:%SZ")
            startDateMonth = format_date.strftime("%B, %Y")
            sportType = serializer.data.get('sportType')
            description = serializer.data.get('description')
            distance = serializer.data.get('distance')
            movingTime = serializer.data.get('movingTime')
            maxSpeed = serializer.data.get('maxSpeed')
            averageSpeed = serializer.data.get('averageSpeed')
            newWorkout = WorkoutLog(activityId=activityId, activityName=activityName, startDate=startDate,
                                    sportType=sportType, description=description, distance=distance,
                                    movingTime=movingTime, maxSpeed=maxSpeed, averageSpeed=averageSpeed, startDateMonth=startDateMonth)
            newWorkout.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, format=None):

        workout = WorkoutLog.objects.all().order_by('-startDate')
        serializer = WorkoutLogSerializers(workout, many=True)
        return JsonResponse(serializer.data, safe=False)
    
class RunDashboard(APIView):

    serializer_class = WorkoutLogSerializers

    def get(self, request, format=None):

        runData = WorkoutLog.objects.order_by('sportType', '-startDate')
        serializer = WorkoutLogSerializers(runData, many=True)
        return JsonResponse(serializer.data, safe=False)
            

class upcomingWorkout(APIView):

    serializer_class = NewWorkoutSerializers


    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            workoutSelected = serializer.data.get('workoutSelected')
            runDetails = serializer.data.get('runDetails') 
            liftType = serializer.data.get('liftType')
            nextWorkout = NewWorkout(workoutSelected=workoutSelected, runDetails=runDetails, liftType=liftType) 
            nextWorkout.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, format=None):

        workout = NewWorkout.objects.all()
        serializer = NewWorkoutSerializers(workout, many=True)
        return JsonResponse(serializer.data, safe=False)
    

class LiftingStats(APIView):

    serializer_class = liftStatsSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            bench = serializer.data.get('bench')
            press = serializer.data.get('press')
            squat = serializer.data.get('squat')
            deadlift = serializer.data.get('deadlift')
            liftStatUpdate = LiftStats(bench=bench, press=press, squat=squat, deadlift=deadlift)
            liftStatUpdate.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, format=None):

        updatedStats = LiftStats.objects.order_by('-updateDate')
        serializer = liftStatsSerializer(updatedStats, many=True)
        return JsonResponse(serializer.data, safe=False)
    

class StravaAuthToken(APIView):

    serializer_class = StravaAuthSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            userEmail = serializer.data.get('userEmail')
            accessToken = serializer.data.get('accessToken')
            refreshToken = serializer.data.get('refreshToken')
            tokenExpiration = serializer.data.get('tokenExpiration')
            StravaAuthUpdate = StravaAuth(userEmail=userEmail, accessToken=accessToken, refreshToken=refreshToken, tokenExpiration=tokenExpiration)
            StravaAuthUpdate.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, fromat=None):

        currentToken = StravaAuth.objects.order_by('-requestReceived')
        serializer = StravaAuthSerializer(currentToken, many=True)
        return JsonResponse(serializer.data, safe=False)


### Authentication Views ###

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get['username', '']
        password = request.POST.get['password', '']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            request.session['username'] = username
            request.session.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def createUser(request):
#     serializer = UserSerializers(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         user = User.objects.get(username=request.data['username'])
#         user.set_password(request.data['password'])
#         user.save
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({"Token": token.key, "User": serializer.data})
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# @authentication_classes([SessionAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def test_token(request):
#     return Response("passed")

