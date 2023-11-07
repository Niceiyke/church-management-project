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

    def __str__(self):
        return self.name


class Rank(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

