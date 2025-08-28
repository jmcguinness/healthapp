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
from django.urls import path, re_path, include
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import Log, upcomingWorkout, RunDashboard, LiftingStats, login_user, StravaAuthToken
from api import views
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/workoutLog', Log.as_view()),
    path('api/newWorkout', upcomingWorkout.as_view()),
    path('api/runDashboard', RunDashboard.as_view()),
    path('api/liftingDashboard', LiftingStats.as_view()),
    path('api/login', views.login_user),
    path('api/stravaAuth', StravaAuthToken.as_view()),
    path("api/register/", RegisterView.as_view(), name="rest_register"),
    path("api/login/", LoginView.as_view(), name="rest_login"),
    path("api/logout/", LogoutView.as_view(), name="rest_logout"),
    path("api/user/", UserDetailsView.as_view(), name="rest_user_details"),
]

urlpatterns = format_suffix_patterns(urlpatterns)