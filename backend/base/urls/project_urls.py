from django.urls import path
from base.views import project_views as views



urlpatterns = [
    path('', views.getProjects, name='projects'),
    path('<str:pk>/', views.getProject, name='project'),
]