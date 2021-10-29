
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from django.core.mail import send_mail
from rest_framework.renderers import JSONRenderer
from django.conf import settings
import smtplib, ssl
from rest_framework import serializers

@api_view(['POST'])
def getContact(request):
	data = request.data
	try:
		name = data['name']
		email = data['email']
		subject = data['subject']
		message = data['message']

		port = 465  # For SSL
		smtp_server = "smtp.gmail.com"
		sender_email = ""  # Enter your address
		receiver_email = ""  # Enter receiver address
		password = "dookgqamilkyisrl"
		message2 = """\
			\n
			From: %s\n
			Name: %s\n
			Subject: %s\n
			%s
			""" % (email,"".join(name), subject, message)

		context = ssl.create_default_context()
		with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
			server.login(sender_email, password)
			server.sendmail(sender_email, receiver_email, message2)
			server.quit()

		return Response('Email did send')
	except:
		return Response('Email did not send')


