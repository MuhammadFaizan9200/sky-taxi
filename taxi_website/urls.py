from django.contrib import admin
from django.urls import path, include
from dashboard.views import logout_user

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dashboard.urls')),
    path('', include('login.urls')),
    path('signout', logout_user, name="signout")
]
