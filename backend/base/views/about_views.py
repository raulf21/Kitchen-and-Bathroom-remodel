from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import About
from base.serializers import AboutSerializer


@api_view(['GET'])
def getAbout(request):
    abouts = About.objects.all()
    serializer = AboutSerializer(abouts, many=True)
    return Response(serializer.data)