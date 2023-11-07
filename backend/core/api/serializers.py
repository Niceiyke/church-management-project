from rest_framework import serializers
from accounts import models
from management.models import Homecell,Unit,Rank
from members.models import Members


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ["first_name", "last_name", "email", "phone_number", "address"]


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = models.UserProfile
        fields = [
            "id",
            "user",
            "bio",
            "profile_picture",
        ]
        read_only_fields = ["user"]


class HomecellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homecell
        fields = "__all__"


class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = "__all__"


class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = "__all__"

class MembersSerializers(serializers.ModelSerializer):
    class Meta:
        model =Members
        fields =['id',"first_name", "last_name", "email", "phone_number", "address","bio",
            "profile_picture","gender","homecell",'unit','rank','leadership']