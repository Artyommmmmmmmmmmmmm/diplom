from django.contrib import admin
from .models import MachineModel, EngineModel , TransmissionModel, TMType, TM, RecoveryMethod,\
                   Complaint, ControlModel, ServiceCompany, FailureNode, Machine, LeadModel
# Register your models here.
admin.site.register(MachineModel)
admin.site.register(EngineModel)
admin.site.register(TransmissionModel)
admin.site.register(TMType)
admin.site.register(TM)
admin.site.register(RecoveryMethod)
admin.site.register(Complaint)
admin.site.register(ControlModel)
admin.site.register(ServiceCompany)
admin.site.register(FailureNode)
admin.site.register(LeadModel)
admin.site.register(Machine)