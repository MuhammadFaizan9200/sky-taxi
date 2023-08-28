from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
# Create your views here.
import time
from django.http import HttpResponse, HttpResponseRedirect

def index(request):
    print(request)
    return render(request, 'index.html')


def logout_user(request):
    del request.COOKIES['user_id']
    del request.COOKIES['user_level']
    #return redirect('/')


def my_view(request):
    response = HttpResponseRedirect('/')
    if 'user_id' in request.COOKIES:
        response.delete_cookie('user_id')
    return response

def faq(request):
    
    return render(request, "faq.html")


def about(request):
    
    return render(request, "about-us.html")

def privacy(request):
    
    return render(request, "privacy-policy.html")

def terms(request):
    
    return render(request, "terms-condition.html")

def billing(request):
    
    return render(request, "billing.html")    