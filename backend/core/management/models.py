from django.db import models
from accounts.models import CustomUser

# Create your models here.

class Homecell(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=150, null=True, blank=True)
    members = models.ManyToManyField(CustomUser, related_name="cell_members",blank=True)
    cell_leader = models.ForeignKey(
        CustomUser, on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return self.name


class Unit(models.Model):
    name = models.CharField(max_length=50)
    members = models.ManyToManyField(
        CustomUser, related_name="unit_members", blank=True
    )
    unit_leader = models.ForeignKey(
        CustomUser, on_delete=models.SET_NULL, null=True, blank=True
    )

    date_created =models.DateField(auto_now_add=True)
    date_updated =models.DateField(auto_now=True)

    def __str__(self):
        return self.name


class Rank(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class ServiceType(models.Model):
    name = models.CharField(max_length=50)

class ServiceTime(models.Model):
    name =models.CharField(max_length='50')

class CountingUnit(models.Model):
    unit=models.ForeignKey(Unit,on_delete=models.CASCADE)

class Attendance(models.Model):
    service_time =models.ForeignKey(ServiceTime,on_delete=models.CASCADE)
    counting_unit=models.ForeignKey(CountingUnit,on_delete=models.CASCADE)
    males= models.IntegerField( null=True,blank=True)
    females =models.IntegerField(null=True,blank=True)
    children =models.IntegerField(null=True,blank=True)
    vehicles =models.IntegerField(null=True,blank=True)

    service_date=models.DateTimeField(auto_now_add=True)


class Service(models.Model):
    service_type= models.ForeignKey(ServiceType,on_delete=models.SET_NULL, null=True)
    attendance =models.ForeignKey(Attendance, on_delete=models.CASCADE,null=True)


    service_date=models.DateTimeField(auto_now_add=True)

