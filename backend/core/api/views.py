from rest_framework import generics
from accounts.models import UserProfile, CustomUser
from members.models import Members
from .serializers import UserProfileSerializer, UserSerializer,MembersSerializers


class UserProfileList(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class RegisterUser(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class ListCreateMembers(generics.ListCreateAPIView):
    queryset =Members.objects.all()
    serializer_class =MembersSerializers

class MembersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset =Members.objects.all()
    serializer_class =MembersSerializers


