from django.db import models
from management.models import Homecell,Unit,Rank

# Create your models here.

GENDER_CHOICES = (
    ("Male", "Male"),
    ("Female", "Female"),
)

class Members(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=11, blank=True, null=True, unique=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    bio = models.TextField(blank=True)
    baptized=models.BooleanField(default=False)
    gender = models.CharField(
        max_length=6, choices=GENDER_CHOICES, blank=True, null=True
    )
    homecell = models.ForeignKey(
        Homecell, on_delete=models.CASCADE, blank=True, null=True,related_name='homecell'
    )
    unit = models.ManyToManyField(
        Unit,
        blank=True,
        related_name='unit'
    )
    leadership = models.BooleanField(default=False)
    rank = models.ManyToManyField(
        Rank,
        related_name="member_rank",
        blank=True,
    )
    profile_picture = models.ImageField(
        upload_to="profile_pics/", blank=True, null=True
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
