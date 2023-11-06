from rest_framework import generics
from accounts.models import UserProfile
from .serializers import UserProfileSerializer


class UserProfileList(generics.ListAPIView):
    queryset =UserProfile.objects.all()
    serializer_class =UserProfileSerializer

class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
