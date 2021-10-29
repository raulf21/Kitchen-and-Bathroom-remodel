from django.urls import path
from base.views import contact_views as views



urlpatterns = [
    path('', views.getContact, name='contact')
]