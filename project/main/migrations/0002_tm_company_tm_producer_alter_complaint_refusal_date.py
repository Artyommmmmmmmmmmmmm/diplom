# Generated by Django 5.1 on 2024-08-17 04:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tm',
            name='company_tm_producer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='company_tm_producer', to='main.servicecompany'),
        ),
        migrations.AlterField(
            model_name='complaint',
            name='refusal_date',
            field=models.DateTimeField(max_length=60),
        ),
    ]
