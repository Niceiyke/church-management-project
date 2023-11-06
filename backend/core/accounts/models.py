from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=11, blank=True,null=True,unique=True)
    address =models.CharField(max_length=100,blank=True, null=True)
    userprofile = models.OneToOneField('UserProfile', on_delete=models.CASCADE, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.first_name}  {self.last_name}'


GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
)

class Homecell(models.Model):
    name =models.CharField(max_length=50,null=True,blank=True)
    address =models.CharField(max_length=150,null=True,blank=True)
    members =models.ManyToManyField(CustomUser,related_name='cell_members')
    cell_leader = models.ForeignKey(CustomUser,on_delete=models.SET_NULL,null=True,blank=True)

    def __str__(self):
        return self.name

class Unit(models.Model):
    name =models.CharField(max_length=50)
    members =models.ManyToManyField(CustomUser,related_name='unit_members',null=True,blank=True)
    unit_leader = models.ForeignKey(CustomUser,on_delete=models.SET_NULL,null=True,blank=True)

    def __str__(self):
        return self.name

class Rank(models.Model):
    name =models.CharField(max_length=50)

    def __str__(self):
        return self.name




class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE , related_name='user')
    bio = models.TextField(blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    homecell =models.ForeignKey(Homecell,on_delete=models.CASCADE,blank=True, null=True)
    unit =models.ManyToManyField(Unit,blank=True, )
    leadership = models.BooleanField(default=False)
    rank= models.ManyToManyField(Rank,blank=True,)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    # Add any other fields you need for the user's profile

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'