# Generated by Django 4.2.7 on 2023-11-13 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0009_alter_attendance_first_timers_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='message',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='service',
            name='minister',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
