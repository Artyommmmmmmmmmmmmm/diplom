from django.db import models
from django.conf import settings
# Create your models here.

class MachineModel(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

class EngineModel(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

class TransmissionModel(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)
    
class LeadModel(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

class ControlModel(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class ServiceCompany(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=60)
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class Machine(models.Model):
    machine_factory_num = models.CharField(max_length=60)
    machine_model = models.ForeignKey(
        to=MachineModel,
        on_delete=models.CASCADE,
        related_name='machine_machine_model'
    )
    engine_factory_num = models.CharField(max_length=60)
    engine_model = models.ForeignKey(
        to=EngineModel,
        on_delete=models.CASCADE,
        related_name='machine_engine_model'
    )
    transmission_factory_num = models.CharField(max_length=60)
    transmission_model = models.ForeignKey(
        to=TransmissionModel,
        on_delete=models.CASCADE,
        related_name='machine_transmission_model'
    )
    lead_factory_num = models.CharField(max_length=60)
    lead_model = models.ForeignKey(
        to=LeadModel,
        on_delete=models.CASCADE,
        related_name='machine_lead_model'
    )
    control_factory_num = models.CharField(max_length=60)
    control_model = models.ForeignKey(
        to=ControlModel,
        on_delete=models.CASCADE,
        related_name='machine_control_model'
    )
    delivery_agreement_num = models.CharField(max_length=60)
    date_of_shipment = models.DateField()
    consignee = models.CharField(max_length=60)
    delivery_address = models.CharField(max_length=60)
    equipment = models.CharField(max_length=60)
    client = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='machine_user',
    )
    service_company = models.ForeignKey(
        to=ServiceCompany,
        on_delete=models.CASCADE,
        related_name='machine_service_company'
    )

class TMType(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=60)

class TM(models.Model):
    tm_type = models.ForeignKey(
        to=TMType,
        on_delete=models.CASCADE,
        related_name='tm_type'
    )
    event_date = models.DateField()
    operating_time = models.IntegerField()
    order_id = models.CharField(max_length=60)
    order_date = models.DateField()
    company_tm_producer = models.ForeignKey(
        to=ServiceCompany,
        on_delete=models.CASCADE,
        related_name='company_tm_producer',
    )
    service_company = models.ForeignKey(
        to=ServiceCompany,
        on_delete=models.CASCADE,
        related_name='tm_service_company'
    )
    machine = models.ForeignKey(
        to=Machine,
        on_delete=models.CASCADE,
        related_name='tm_machine'
    )

class FailureNode(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

class RecoveryMethod(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=2000)

class Complaint(models.Model):
    refusal_date = models.DateField(max_length=60)
    operating_time = models.IntegerField()
    failure_node = models.ForeignKey(
        to=FailureNode,
        on_delete=models.CASCADE,
        related_name='complaint_failure_node'
    )
    failure_description = models.CharField(max_length=2000)
    recovery_method = models.ForeignKey(
        to=RecoveryMethod,
        on_delete=models.CASCADE,
        related_name='complaint_recovery_method'
    )
    spare_parts_used = models.CharField(max_length=2000)
    recovery_date = models.DateField()
    equipment_downtime = models.IntegerField()
    machine = models.ForeignKey(
        to=Machine,
        on_delete=models.CASCADE,
        related_name='complaint_machine'
    )
    service_company = models.ForeignKey(
        to=ServiceCompany,
        on_delete=models.CASCADE,
        related_name='complaint_service_company'
    )
