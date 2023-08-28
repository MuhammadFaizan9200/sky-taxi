from django.shortcuts import render

# Create your views here.
def register(request):
    return render(request, 'register.html')

def institutions(request):
    return render(request, 'institutions.html')

def verify(request):
    return render(request, 'verify.html')

def available_rides(request):
    return render(request, 'available.html')

def my_rides(request):
    return render(request, 'myrides.html')

def login_form(request):
    return render(request, 'login.html')    