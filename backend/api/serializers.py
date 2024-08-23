from rest_framework import serializers
from api.models import WorkoutLog, NewWorkout, LiftStats
from django.db.models import Sum
from django.contrib.auth.models import User

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
        

class UserSerializers(serializers.ModelSerializer):

    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']


class liftStatsSerializer(serializers.ModelSerializer):

    class Meta(object):
        model = LiftStats
        fields = ['bench', 'press', 'squat', 'deadlift']