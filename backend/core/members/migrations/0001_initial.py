# Generated by Django 4.2.7 on 2023-11-07 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('phone_number', models.CharField(blank=True, max_length=11, null=True, unique=True)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('bio', models.TextField(blank=True)),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6, null=True)),
                ('leadership', models.BooleanField(default=False)),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='profile_pics/')),
                ('homecell', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='homecell', to='management.homecell')),
                ('rank', models.ManyToManyField(blank=True, related_name='member_rank', to='management.rank')),
                ('unit', models.ManyToManyField(blank=True, related_name='unit', to='management.unit')),
            ],
        ),
    ]