from .permissions import AllowInvalidTokenPermission
from rest_framework import mixins, viewsets, permissions
from .models import (
    Machine,
    TM, 
    Complaint,
    LeadModel,
    EngineModel,
    MachineModel,
    ControlModel,
    TransmissionModel,
    RecoveryMethod,
    FailureNode,
    TMType,
    ServiceCompany)
from .serializers import (
    MachineSerializer, 
    TMSerializer, 
    ComplaintSerializer,
    UnauthorizedMachineSerializer, 
    ClientSerializer,
    ServiceCompanySerializer,
    ControlSerializer,
    LeadSerializer,
    EngineSerializer,
    TMTypeSerializer,
    FailureNodeSerializer,
    TransmissionSerializer,
    MachineModelSerializer,
    RecoveryMethodSerializer)
from django.contrib.auth.models import User
from itertools import chain
from rest_framework.response import Response
from django.http import HttpResponse



class UnauthorizedMachinesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = UnauthorizedMachineSerializer

class MachinesViewSet(mixins.ListModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    permission_classes = [permissions.IsAuthenticated]
    def list(self, request, *args, **kwargs):
        try:
            machines = Machine.objects.filter(client__exact=request.user)
            serializer = self.get_serializer(list(machines), many=True)
            return Response(serializer.data)
        except :
            return HttpResponse('Unauthorized', status=401)

class TMViewSet(mixins.ListModelMixin,
                mixins.UpdateModelMixin,
                mixins.RetrieveModelMixin,
                viewsets.GenericViewSet):
    object = TM
    queryset = TM.objects.all()
    serializer_class = TMSerializer
    permission_classes = [permissions.IsAuthenticated]
    def list(self, request, *args, **kwargs):
        try :
            machines = request.user.machine_user.all()
            tms = TM.objects.filter(machine__in=machines)
            serializer = self.get_serializer(list(tms), many=True)
            return Response(serializer.data)
        except :
            return HttpResponse('Unauthorized', status=401)

class ComplaintsViewSet(mixins.ListModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = [permissions.IsAuthenticated]
    def list(self, request, *args, **kwargs):
        try:
            machines = request.user.machine_user.all()
            complaints = Complaint.objects.filter(machine__in=machines)
            serializer = self.get_serializer(list(complaints), many=True)
            return Response(serializer.data)
        except :
            return HttpResponse('Unauthorized', status=401)
    def partial_update(self, request, *args, **kwargs):
        try:
            request.user.groups.get(name='service_company')
        except:
            return Response('null')
        
        return super().partial_update(request, *args, **kwargs)
class UserViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.IsAuthenticated]
    def list(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)
    
class MachineModelViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = MachineModel.objects.all()
    serializer_class = MachineModelSerializer

class ControlViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = ControlModel.objects.all()
    serializer_class = ControlSerializer

class LeadViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = LeadModel.objects.all()
    serializer_class = LeadSerializer

class EngineViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = EngineModel.objects.all()
    serializer_class = EngineSerializer

class TransmissionViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = TransmissionModel.objects.all()
    serializer_class = TransmissionSerializer

class RecoveryMethodViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer

class FailureNodeViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = FailureNode.objects.all()
    serializer_class = FailureNodeSerializer

class TMTypeViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = TMType.objects.all()
    serializer_class = TMTypeSerializer

class ServiceCompanyViewset(mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = ServiceCompany.objects.all()
    serializer_class = ServiceCompanySerializer