from statistics import mode
from django.db import models

# Create your models here.
class geolocation(models.Model):
    name = models.CharField(max_length=55,default="Name")
    Latitude = models.IntegerField(default=0)
    Longitude = models.IntegerField(default=0)
    
