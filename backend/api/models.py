from django.db import models
from django.db.models import Sum
from django.contrib.auth.models import AbstractUser

# Create your models here.
class WorkoutLog(models.Model):
    activityId = models.UUIDField(primary_key= True)
    activityName = models.CharField(max_length=40)
    startDate = models.DateField()
    startDateMonth = models.CharField(max_length=25, null=True)
    sportType = models.CharField(max_length=25)
    description = models.CharField(max_length=250, null=True, blank=True)
    distance = models.FloatField(null=True, blank=True)
    movingTime = models.FloatField(null=True, blank=True)
    maxSpeed = models.FloatField(null=True, blank=True)
    averageSpeed = models.FloatField(null=True, blank=True)

class NewWorkout(models.Model):
    workoutSelected = models.CharField(max_length=25)
    runDetails = models.CharField(max_length=250, null=True, blank=True)
    liftType = models.CharField(max_length=30, null=True, blank=True)

class LiftStats(models.Model):
    updateDateTime = models.DateTimeField(auto_now_add=True)
    updateDate = models.DateField(auto_now_add=True)
    bench = models.FloatField(null=False, blank=False)
    press =  models.FloatField(null=False, blank=False)
    squat =  models.FloatField(null=False, blank=False)
    deadlift =  models.FloatField(null=False, blank=False)

class StravaAuth(models.Model):
    requestReceived = models.DateTimeField(auto_now_add=True)
    userEmail = models.CharField(null=False, blank=False, max_length=250)
    accessToken = models.CharField(max_length=250)
    refreshToken = models.CharField(max_length=250)
    tokenExpiration = models.IntegerField()
