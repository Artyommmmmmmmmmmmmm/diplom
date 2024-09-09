from django.contrib import admin
from django.urls import path, include
from .views import (
    MachinesViewSet,
    TMViewSet,
    ComplaintsViewSet,
    UserViewSet,
    LeadViewset,
    EngineViewset,
    TMTypeViewset,
    ControlViewset,
    FailureNodeViewset,
    MachineModelViewset,
    TransmissionViewset,
    RecoveryMethodViewset,
    ServiceCompanyViewset,
    UnauthorizedMachinesViewSet
)
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'complaints', ComplaintsViewSet)
router.register(r'tms', TMViewSet)
router.register(r'machines', MachinesViewSet)
router.register(r'user', UserViewSet)
router.register(r'lead', LeadViewset)
router.register(r'engine', EngineViewset)
router.register(r'tmtype', TMTypeViewset)
router.register(r'control', ControlViewset)
router.register(r'failurenode', FailureNodeViewset)
router.register(r'machinemodel', MachineModelViewset)
router.register(r'transmission', TransmissionViewset)
router.register(r'recoverymethod', RecoveryMethodViewset)
router.register(r'servicecompany', ServiceCompanyViewset)
router.register(r'unauthorized', UnauthorizedMachinesViewSet, basename='unauthorized')
urlpatterns = [
    path('main/', include(router.urls))
]
