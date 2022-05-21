from django.db.models import fields
from rest_framework import serializers
from .models import geolocation

class geoseralizer(serializers.ModelSerializer):
    class Meta:
        model = geolocation
        fields = "__all__"