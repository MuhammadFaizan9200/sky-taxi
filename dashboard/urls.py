from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.index, name='index'),
    path('faq', views.faq, name='faq'),
    path('about-us', views.about, name='about-us'),
    path('privacy-policy', views.privacy, name='privacy-policy'),
    path('terms-condition', views.terms, name='terms-condition'),
    path('billing', views.billing, name='billing'),
    path('logout/',views.my_view, name='logout'),

]