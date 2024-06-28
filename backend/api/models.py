from django.db import models
from django.db.models import Sum

# Create your models here.
class WorkoutLog(models.Model):
    activityId = models.UUIDField(primary_key= True)
    activityName = models.CharField(max_length=40)
    startDate = models.DateTimeField()
    sportType = models.CharField(max_length=25)
    description = models.CharField(max_length=250)
    distance = models.FloatField()
    movingTime = models.FloatField()
    maxSpeed = models.FloatField()
    averageSpeed = models.FloatField()

class NewWorkout(models.Model):
    workoutSelected = models.CharField(max_length=25)
    runDetails = models.CharField(max_length=250)
    lift1 = models.CharField(max_length=25)
    lift1Details = models.CharField(max_length=100)
    lift2 = models.CharField(max_length=25)
    lift2Details = models.CharField(max_length=100)
    lift3 = models.CharField(max_length=25)
    lift3Details = models.CharField(max_length=100)
    lift4 = models.CharField(max_length=25)
    lift4Details = models.CharField(max_length=100)
    lift5 = models.CharField(max_length=25)
    lift5Details = models.CharField(max_length=100)
    lift6 = models.CharField(max_length=25)
    lift6Details = models.CharField(max_length=100)
