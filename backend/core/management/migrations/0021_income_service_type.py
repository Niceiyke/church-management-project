# Generated by Django 4.2.7 on 2023-11-15 12:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0020_remove_income_service_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='income',
            name='service_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='management.servicetype'),
        ),
    ]
