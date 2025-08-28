from rest_framework import serializers
from api.models import WorkoutLog, NewWorkout, LiftStats, StravaAuth
from django.db.models import Sum
from django.contrib.auth.models import User

class WorkoutLogSerializers(serializers.ModelSerializer):

    class Meta:
        model = WorkoutLog
        fields = ['activityId', 'activityName', 'startDate', 'sportType', 'description', 'distance', 
                  'movingTime', 'maxSpeed', 'averageSpeed', 'startDateMonth',]
        

class NewWorkoutSerializers(serializers.ModelSerializer):

    class Meta:
        model = NewWorkout
        fields = ['workoutSelected', 'runDetails', 'liftType',]
        

class UserSerializers(serializers.ModelSerializer):

    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email',]


class liftStatsSerializer(serializers.ModelSerializer):

    class Meta(object):
        model = LiftStats
        fields = ['bench', 'press', 'squat', 'deadlift', 'updateDate',]


class StravaAuthSerializer(serializers.ModelSerializer):

    class Meta(object):
        model = StravaAuth
        fields = ['userEmail', 'requestReceived', 'accessToken', 'refreshToken', 'tokenExpiration',]
