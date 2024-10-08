from django.db import models
from django.db.models import Sum

# Create your models here.
class WorkoutLog(models.Model):
    activityId = models.UUIDField(primary_key= True)
    activityName = models.CharField(max_length=40)
    startDate = models.DateTimeField()
    startDateMonth = models.FloatField(max_length=2, null=True)
    sportType = models.CharField(max_length=25)
    description = models.CharField(max_length=250, null=True, blank=True)
    distance = models.FloatField(null=True, blank=True)
    movingTime = models.FloatField(null=True, blank=True)
    maxSpeed = models.FloatField(null=True, blank=True)
    averageSpeed = models.FloatField(null=True, blank=True)

class NewWorkout(models.Model):
    workoutSelected = models.CharField(max_length=25)
    runDetails = models.CharField(max_length=250, null=True, blank=True)
    lift1 = models.CharField(max_length=25, null=True, blank=True)
    lift1Details = models.CharField(max_length=100, null=True, blank=True)
    lift2 = models.CharField(max_length=25, null=True, blank=True)
    lift2Details = models.CharField(max_length=100, null=True, blank=True)
    lift3 = models.CharField(max_length=25, null=True, blank=True)
    lift3Details = models.CharField(max_length=100, null=True, blank=True)
    lift4 = models.CharField(max_length=25, null=True, blank=True)
    lift4Details = models.CharField(max_length=100, null=True, blank=True)
    lift5 = models.CharField(max_length=25, null=True, blank=True)
    lift5Details = models.CharField(max_length=100, null=True, blank=True)
    lift6 = models.CharField(max_length=25, null=True, blank=True)
    lift6Details = models.CharField(max_length=100, null=True, blank=True)

class LiftStats(models.Model):
    updateDate = models.DateTimeField(auto_now_add=True)
    bench = models.FloatField(null=False, blank=False)
    press =  models.FloatField(null=False, blank=False)
    squat =  models.FloatField(null=False, blank=False)
    deadlift =  models.FloatField(null=False, blank=False)
