from django.db import models
from accounts.models import CustomUser


class Mentors(models.Model):
    mentor =models.ForeignKey(CustomUser, on_delete=models.SET_NULL,null=True)
    date_created =models.DateField(auto_now_add=True)
    date_updated =models.DateField(auto_now=True)


    def __str__(self):
        return f'{self.mentor.first_name} {self.mentor.last_name}'


class NewConvert(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30 )
    phone_number = models.CharField(max_length=11, unique=True)
    email = models.EmailField(unique=True,blank=True,null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    prayer_request= models.TextField(max_length=240,blank=True, null=True)
    mentor = models.ForeignKey(Mentors,blank=True,null=True,on_delete=models.SET_NULL,)
    foundation_class =models.BooleanField(default=False)
    followed_up = models.BooleanField(default=False)
    converted =models.BooleanField(default=False)
    date_created =models.DateField(auto_now_add=True)
    date_updated =models.DateField(auto_now=True)


    def __str__(self):
        return f'{self.first_name} {self.last_name}'

