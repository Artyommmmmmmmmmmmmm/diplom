from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    MachineModel,
    EngineModel,
    TransmissionModel,
    LeadModel,
    ControlModel,
    ServiceCompany,
    TMType,
    FailureNode,
    RecoveryMethod,
    Machine,
    TM,
    Complaint
    )

class MachineModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineModel
        fields = ['name', 'description'] 

class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineModel
        fields = ['name', 'description'] 

class TransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransmissionModel
        fields = ['name', 'description'] 
    
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadModel
        fields = ['name', 'description'] 

class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlModel
        fields = ['name', 'description'] 

class ServiceCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCompany
        fields = ['name', 'description'] 

class TMTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TMType
        fields = ['name', 'description'] 

class FailureNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailureNode
        fields = ['name', 'description'] 

class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = ['name', 'description'] 

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'groups'] 

class MachineSerializer(serializers.ModelSerializer):
    machine_model = MachineModelSerializer()
    engine_model = EngineSerializer()
    transmission_model = TransmissionSerializer()
    lead_model = LeadSerializer()
    control_model = ControlSerializer()
    client = ClientSerializer()
    service_company = ServiceCompanySerializer()
    class Meta:
        model = Machine
        fields = ['machine_factory_num', 'machine_model',
                  'engine_factory_num', 'engine_model', 
                  'transmission_factory_num', 'transmission_model', 
                  'lead_factory_num', 'lead_model', 
                  'control_factory_num', 'control_model', 
                  'delivery_agreement_num', 'date_of_shipment', 
                  'consignee', 'delivery_address', 
                  'equipment', 'client', 
                  'service_company',
                  ] 
class UnauthorizedMachineSerializer(serializers.ModelSerializer):
    machine_model = MachineModelSerializer()
    engine_model = EngineSerializer()
    transmission_model = TransmissionSerializer()
    lead_model = LeadSerializer()
    control_model = ControlSerializer()
    class Meta:
        model = Machine
        fields = ['machine_factory_num', 'machine_model',
                  'engine_factory_num', 'engine_model', 
                  'transmission_factory_num', 'transmission_model', 
                  'lead_factory_num', 'lead_model', 
                  'control_factory_num', 'control_model', 
                  ] 

class TMSerializer(serializers.ModelSerializer):
    tm_type = TMTypeSerializer()
    company_tm_producer = ServiceCompanySerializer()
    service_company = ServiceCompanySerializer()
    machine = MachineSerializer()

    class Meta:
        model = TM
        fields = ['tm_type', 'event_date',
                  'operating_time', 'order_id',
                  'order_date', 'company_tm_producer',
                  'service_company', 'machine'
                  ]

class ComplaintSerializer(serializers.ModelSerializer):
    failure_node = FailureNodeSerializer()
    recovery_method = RecoveryMethodSerializer()
    machine = MachineSerializer()
    service_company = ServiceCompanySerializer()

    class Meta:
        model = Complaint
        fields = ['refusal_date', 'operating_time',
                  'failure_node', 'failure_description',
                  'recovery_method', 'spare_parts_used',
                  'recovery_date', 'equipment_downtime',
                  'machine', 'service_company'
                  ]
