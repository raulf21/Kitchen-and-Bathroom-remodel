from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description=models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

# Create your models here.
class About(models.Model):
    about = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.about

