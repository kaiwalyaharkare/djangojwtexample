
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('geolocation/',include('geolocation.urls')),
    path('api/',include('base.api.urls')),
    path('rest/',include('rest_framework.urls')),
]
