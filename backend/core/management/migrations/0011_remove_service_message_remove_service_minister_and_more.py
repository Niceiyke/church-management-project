# Generated by Django 4.2.7 on 2023-11-13 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0010_service_message_service_minister'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='message',
        ),
        migrations.RemoveField(
            model_name='service',
            name='minister',
        ),
        migrations.AddField(
            model_name='attendance',
            name='message',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='attendance',
            name='minister',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
