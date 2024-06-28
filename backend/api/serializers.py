from rest_framework import serializers
from api.models import WorkoutLog, NewWorkout
from django.db.models import Sum

class WorkoutLogSerializers(serializers.ModelSerializer):

    class Meta:
        model = WorkoutLog
        fields = ['activityId', 'activityName', 'startDate', 'sportType', 'description', 'distance', 
                  'movingTime', 'maxSpeed', 'averageSpeed']
        

class NewWorkoutSerializers(serializers.ModelSerializer):

    class Meta:
        model = NewWorkout
        fields = ['workoutSelected', 'runDetails', 'lift1', 'lift1Details', 'lift2', 'lift2Details',
                   'lift3', 'lift3Details', 'lift4', 'lift4Details', 'lift5', 'lift5Details', 'lift6', 'lift6Details',]