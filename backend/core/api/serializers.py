from rest_framework import serializers
from accounts import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =models.CustomUser
        fields =['first_name','last_name','phone_number','address']
    
class UserProfileSerializer(serializers.ModelSerializer):

    user= UserSerializer()
    class Meta:
        model = models.UserProfile
        fields =['id','user','bio','gender','homecell','unit','leadership','rank','profile_picture']
        read_only_fields = ['user']

class HomecellSerializer(serializers.ModelSerializer):
    class Meta:
        model =models.Homecell
        fields ='__all__'

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model =models.Unit
        fields ='__all__'

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model =models.Rank
        fields ='__all__'

