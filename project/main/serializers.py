from rest_framework import serializers
from django.contrib.auth.models import User, Group
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
        fields = ['id', 'name', 'description'] 

class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineModel
        fields = ['id', 'name', 'description'] 

class TransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransmissionModel
        fields = ['id', 'name', 'description'] 
    
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadModel
        fields = ['id', 'name', 'description'] 

class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlModel
        fields = ['id', 'name', 'description'] 

class ServiceCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCompany
        fields = ['id', 'name', 'description'] 

class TMTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TMType
        fields = ['id', 'name', 'description'] 

class FailureNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailureNode
        fields = ['id', 'name', 'description'] 

class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = ['id', 'name', 'description'] 

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

class ClientSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True)
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
    date_of_shipment = serializers.DateField()
    class Meta:
        model = Machine
        fields = ['id', 'machine_factory_num', 'machine_model',
                  'engine_factory_num', 'engine_model', 
                  'transmission_factory_num', 'transmission_model', 
                  'lead_factory_num', 'lead_model', 
                  'control_factory_num', 'control_model', 
                  'delivery_agreement_num', 'date_of_shipment', 
                  'consignee', 'delivery_address', 
                  'equipment', 'client', 
                  'service_company',
                  ] 
        read_only_fields = ('machine_factory_num', 'machine_model',
                            'engine_factory_num', 'engine_model', 
                            'transmission_factory_num', 'transmission_model', 
                            'lead_factory_num', 'lead_model', 
                            'control_factory_num', 'control_model', 
                            )
class UnauthorizedMachineSerializer(serializers.ModelSerializer):
    machine_model = MachineModelSerializer()
    engine_model = EngineSerializer()
    transmission_model = TransmissionSerializer()
    lead_model = LeadSerializer()
    control_model = ControlSerializer()
    class Meta:
        model = Machine
        fields = ['id', 'machine_factory_num', 'machine_model',
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
    event_date = serializers.DateField()
    order_date = serializers.DateField()

    class Meta:
        model = TM
        fields = ['id', 'tm_type', 'event_date',
                  'operating_time', 'order_id',
                  'order_date', 'company_tm_producer',
                  'service_company', 'machine'
                  ]

class ComplaintSerializer(serializers.ModelSerializer):
    failure_node = FailureNodeSerializer()
    recovery_method = RecoveryMethodSerializer()
    machine = MachineSerializer()
    service_company = ServiceCompanySerializer()
    refusal_date = serializers.DateField()
    recovery_date = serializers.DateField()

    class Meta:
        model = Complaint
        fields = ['id', 'refusal_date', 'operating_time',
                  'failure_node', 'failure_description',
                  'recovery_method', 'spare_parts_used',
                  'recovery_date', 'equipment_downtime',
                  'machine', 'service_company'
                  ]
