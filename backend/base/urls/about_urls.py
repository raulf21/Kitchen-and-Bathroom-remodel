from django.urls import path
from base.views import about_views as views



urlpatterns = [
    path('', views.getAbout, name='about')
]