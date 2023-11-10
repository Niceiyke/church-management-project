from rest_framework import serializers
from accounts import models
from management.models import Homecell,Unit,Rank
from members.models import Members
from outreach.models import NewConvert,Mentors


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
    homecell_name = serializers.SerializerMethodField()
    unit_names = serializers.SerializerMethodField()
    class Meta:
        model =Members
        fields =['id',"first_name", "last_name", "email", "phone_number", "address","bio",
            "profile_picture","gender","homecell","homecell_name",'unit',"unit_names",'rank','leadership']
        
    def get_homecell_name(self, obj):
 
        if obj.homecell:
            return f'{obj.homecell.name} '
        return None
    
    def get_unit_names(self, obj):
 
        if obj.unit:
            unit_names = [unit.name for unit in obj.unit.all()]

            return unit_names
        return None
        
class NewConvertSerializers(serializers.ModelSerializer):
    mentor_name = serializers.SerializerMethodField()
    class Meta:
        model = NewConvert
        fields='__all__'

    def get_mentor_name(self, obj):
 
        if obj.mentor:
            return f'{obj.mentor.mentor.first_name} {obj.mentor.mentor.last_name}'
        return None

class MentorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mentors
        fields='__all__'

    
    

