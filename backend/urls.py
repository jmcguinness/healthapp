"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import Log, upcomingWorkout, RunDashboard, LiftingStats
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/workoutLog', Log.as_view()),
    path('api/newWorkout', upcomingWorkout.as_view()),
    path('api/runDashboard', RunDashboard.as_view()),
    path('api/liftingDashboard', LiftingStats.as_view()),
    path('api/login', views.login),
    path('api/createUser', views.createUser),
    path('api/testToken', views.test_token),
]

urlpatterns = format_suffix_patterns(urlpatterns)