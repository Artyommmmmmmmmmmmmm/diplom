from .permissions import AllowInvalidTokenPermission
from rest_framework import mixins, viewsets, permissions
from .models import Machine, TM, Complaint
from .serializers import MachineSerializer, TMSerializer, ComplaintSerializer, UnauthorizedMachineSerializer

class UnauthorizedMachinesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = UnauthorizedMachineSerializer

class MachinesViewSet(mixins.ListModelMixin,
                      mixins.UpdateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    # permission_classes = [permissions.IsAuthenticated, 
    #                       AllowInvalidTokenPermission]
    permission_classes = AllowInvalidTokenPermission

class TMViewSet(mixins.ListModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet):
    queryset = TM.objects.all()
    serializer_class = TMSerializer
    # permission_classes = [permissions.IsAuthenticated, 
    #                       AllowInvalidTokenPermission]
    permission_classes = AllowInvalidTokenPermission

class ComplaintsViewSet(mixins.ListModelMixin,
                        mixins.UpdateModelMixin,
                        viewsets.GenericViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    # permission_classes = [permissions.IsAuthenticated, 
    #                       AllowInvalidTokenPermission]
    permission_classes = AllowInvalidTokenPermission