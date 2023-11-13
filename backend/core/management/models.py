from django.db import models
from accounts.models import CustomUser

# Create your models here.


class Homecell(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=150, null=True, blank=True)
    members = models.ManyToManyField(
        CustomUser, related_name="cell_members", blank=True
    )
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

    date_created = models.DateField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)

    def __str__(self):
        return self.name


class Rank(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class ServiceType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class ServiceTime(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class CountingUnit(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.unit.name


class Attendance(models.Model):
    minister = models.CharField(max_length=100, blank=True)
    message = models.CharField(max_length=200, blank=True)
    service_time = models.ForeignKey(ServiceTime, on_delete=models.CASCADE)
    counting_unit = models.ForeignKey(CountingUnit, on_delete=models.CASCADE)
    males = models.IntegerField(null=True, blank=True)
    females = models.IntegerField(null=True, blank=True)
    children = models.IntegerField(null=True, blank=True)
    vehicles = models.IntegerField(null=True, blank=True)
    first_timers = models.IntegerField(default=0)
    new_converts = models.IntegerField(default=0)
    service_date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.service_date} {self.service_time} {self.counting_unit.unit.name} unit"

    def get_total_attendance(self):
        total_males = self.males or 0
        total_females = self.females or 0
        total_children = self.children or 0
        return total_males + total_females + total_children


class Income(models.Model):
    offering = models.IntegerField(null=True, blank=True)
    tithe = models.IntegerField(null=True, blank=True)
    thanksgiving = models.IntegerField(null=True, blank=True)
    shiloh_sacrifice = models.IntegerField(null=True, blank=True)
    projects = models.IntegerField(null=True, blank=True)
    service_type = models.ForeignKey(ServiceType, on_delete=models.SET_NULL, null=True)
    service_time = models.ForeignKey(ServiceTime, on_delete=models.CASCADE)
    service_date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.service_date} {self.service_type.name}"


class Service(models.Model):
    service_type = models.ForeignKey(ServiceType, on_delete=models.SET_NULL, null=True)
    attendance = models.ManyToManyField(Attendance)
    income = models.ManyToManyField(Income, blank=True)

    service_date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.service_date} {self.service_type.name}"
