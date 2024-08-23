from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import status, generics
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from api.models import WorkoutLog, NewWorkout, LiftStats
from api.serializers import WorkoutLogSerializers, NewWorkoutSerializers, UserSerializers, liftStatsSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, TokenAuthentication

# Create your views here.
class Log(APIView):

    serializer_class = WorkoutLogSerializers

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            activityId = serializer.data.get('activityId')
            activityName = serializer.data.get('activityName')
            startDate = serializer.data.get('startDate')
            sportType = serializer.data.get('sportType')
            description = serializer.data.get('description')
            distance = serializer.data.get('distance')
            movingTime = serializer.data.get('movingTime')
            maxSpeed = serializer.data.get('maxSpeed')
            averageSpeed = serializer.data.get('averageSpeed')
            newWorkout = WorkoutLog(activityId=activityId, activityName=activityName, startDate=startDate,
                                    sportType=sportType, description=description, distance=distance,
                                    movingTime=movingTime, maxSpeed=maxSpeed, averageSpeed=averageSpeed)
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
            lift1 = serializer.data.get('lift1')
            lift1Details = serializer.data.get('lift1Details')
            lift2 = serializer.data.get('lift2')
            lift2Details = serializer.data.get('lift2Details')
            lift3 = serializer.data.get('lift3')
            lift3Details = serializer.data.get('lift3Details')
            lift4 = serializer.data.get('lift4')
            lift4Details = serializer.data.get('lift4Details')
            lift5 = serializer.data.get('lift5')
            lift5Details = serializer.data.get('lift5Details')
            lift6 = serializer.data.get('lift6')
            lift6Details = serializer.data.get('lift6Details')
            nextWorkout = NewWorkout(workoutSelected=workoutSelected, runDetails=runDetails, lift1=lift1, lift1Details=lift1Details,
                                    lift2=lift2, lift2Details=lift2Details, lift3=lift3, lift3Details=lift3Details, lift4=lift4,
                                    lift4Details=lift4Details, lift5=lift5, lift5Details=lift5Details, lift6=lift6, lift6Details=lift6Details) 
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

        updatedStats = LiftStats.objects.all()
        serializer = liftStatsSerializer(updatedStats, many=True)
        return JsonResponse(serializer.data, safe=False)




@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    #if not user.check_password(request.data['password']):
    #return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializers(user)
    return Response({"Token": token.key, "User": serializer.data, "Check": (request.data['password'])})

@api_view(['POST'])
def createUser(request):
    serializer = UserSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save
        token = Token.objects.get_or_create(user=user)
        return Response({"Token": token.key, "User": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response("passed")