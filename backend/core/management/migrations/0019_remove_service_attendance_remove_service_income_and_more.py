# Generated by Django 4.2.7 on 2023-11-15 12:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0018_attendance_service_alter_service_attendance'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='attendance',
        ),
        migrations.RemoveField(
            model_name='service',
            name='income',
        ),
        migrations.AddField(
            model_name='income',
            name='message',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='income',
            name='minister',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='income',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='income', to='management.service'),
        ),
        migrations.AddField(
            model_name='service',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='attendance', to='management.service'),
        ),
        migrations.AlterField(
            model_name='service',
            name='service_date',
            field=models.DateField(),
        ),
    ]
