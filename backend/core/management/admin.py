from django.contrib import admin
from management import models

# Register your models here.
admin.site.register(models.Unit)
admin.site.register(models.Homecell)
admin.site.register(models.CountingUnit)
admin.site.register(models.Rank)
admin.site.register(models.Service)
admin.site.register(models.ServiceTime)
admin.site.register(models.ServiceType)
admin.site.register(models.Attendance)
admin.site.register(models.Income)

