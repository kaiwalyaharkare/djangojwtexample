from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import geolocation
from .serlizers import geoseralizer
from rest_framework import serializers
from rest_framework import status

import json
# Create your views here.

@api_view(['GET'])
def ApiInfo(req):
    api_urls = {
        'all_items': '/',
        'Search by Category': '/?category=category_name',
        'Search by Subcategory': '/?subcategory=category_name',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }
    return Response(api_urls)

@api_view(['GET'])
def get_all_items(req):
    if req.query_params:
        items = geolocation.objects.filter(**req.query_param.dict())
    else:
        items = geolocation.objects.all()
        data = geoseralizer(items,many=True)
        print(data.data)
        return Response(data.data)


@api_view(['POST'])
def add_lat_log(request):
    item = geoseralizer(data=request.data)
  
    # validating for already existing data
    if geolocation.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
  
    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)