# Generated by Django 4.2.7 on 2023-11-13 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0014_income_service_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='income',
            field=models.ManyToManyField(blank=True, to='management.income'),
        ),
    ]
