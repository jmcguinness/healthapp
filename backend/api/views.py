from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import status, generics
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from api.models import WorkoutLog, NewWorkout
from api.serializers import WorkoutLogSerializers, NewWorkoutSerializers
from rest_framework.views import APIView

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

        workout = WorkoutLog.objects.all()
        serializer = WorkoutLogSerializers(workout, many=True)
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