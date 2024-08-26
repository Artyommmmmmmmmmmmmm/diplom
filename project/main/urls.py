from django.contrib import admin
from django.urls import path, include
from .views import (
    MachinesViewSet,
    TMViewSet,
    ComplaintsViewSet
)
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'complaints', ComplaintsViewSet)
router.register(r'tms', TMViewSet)
router.register(r'machines', MachinesViewSet)
urlpatterns = [
    path('main/', include(router.urls))
]
