from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('info/',views.ApiInfo,name='geoinfo'),
    path('add_lat_lon/',views.add_lat_log,name='Add_Lat_Lon'),
    path('all/',views.get_all_items,name="all items list")

]
