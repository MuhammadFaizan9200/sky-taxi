from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('institutions/', views.institutions, name='institutions'),
    path('available-rides/', views.available_rides, name='available_rides'),
    path('myrides/', views.my_rides, name='myrides'),
    path('verify/', views.verify, name='verify'),
    path('login/', views.login_form, name='login'),
]