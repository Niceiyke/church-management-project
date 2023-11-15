from rest_framework import serializers
from accounts import models
from management.models import (
    Homecell,
    Unit,
    Rank,
    Attendance,
    Service,
    ServiceType,
    ServiceTime,
    Income,
)
from members.models import Members
from outreach.models import NewConvert, Mentors


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
        model = Members
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "address",
            "bio",
            "profile_picture",
            "gender",
            "homecell",
            "homecell_name",
            "unit",
            "unit_names",
            "rank",
            "leadership",
        ]

    def get_homecell_name(self, obj):
        if obj.homecell:
            return f"{obj.homecell.name} "
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
        fields = "__all__"

    def get_mentor_name(self, obj):
        if obj.mentor:
            return f"{obj.mentor.mentor.first_name} {obj.mentor.mentor.last_name}"
        return None


class MentorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mentors
        fields = "__all__"


class ServiceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceType
        fields = "__all__"


class ServiceTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceTime
        fields = "__all__"



class AttendanceSerializer(serializers.ModelSerializer):
    services_times =serializers.SerializerMethodField()
    class Meta:
        model = Attendance
        fields = "__all__"

    def get_services_times(self,obj):
        time= obj.service_time.name

        return time




class IncomeSerializer(serializers.ModelSerializer):
    services_times =serializers.SerializerMethodField()

    class Meta:
        model = Income
        fields = "__all__"

    def get_services_times(self,obj):
        time= obj.service_time.name

        return time


class ServiceSerializer(serializers.ModelSerializer):
    service_list = serializers.SerializerMethodField()
    service_type = ServiceTypeSerializer()
    total_attendance = serializers.SerializerMethodField()
    total_income = serializers.SerializerMethodField()
    attendance=AttendanceSerializer(many=True)
    income=IncomeSerializer(many=True)

    class Meta:
        model = Service
        fields = [
            "id",
            "service_list",
            "service_type",
            "service_date",
            "attendance",
            "total_attendance",
            "income",
            "total_income",
            "is_verified",
        ]

    def get_service_list(self,obk):
        qs =Service.objects.filter(is_verified=False)

        service_list =[{entry.id, f'{entry.service_type} - {entry.service_date}' }for entry in qs]

        return service_list

    def get_total_attendance(self, obj):
        # Calculate the total attendance for the service
        total_males = sum(attendance.males or 0 for attendance in obj.attendance.all())
        total_females = sum(
            attendance.females or 0 for attendance in obj.attendance.all()
        )
        total_children = sum(
            attendance.children or 0 for attendance in obj.attendance.all()
        )
        total_new_converts = sum(
            attendance.new_converts or 0 for attendance in obj.attendance.all()
        )
        total_first_timers = sum(
            attendance.first_timers or 0 for attendance in obj.attendance.all()
        )
        total_vehicles = sum(
            attendance.vehicles or 0 for attendance in obj.attendance.all()
        )

        return {
            "males": total_males,
            "females": total_females,
            "children": total_children,
            "first_timers": total_first_timers,
            "new_converts": total_new_converts,
            "vehicles": total_vehicles,
        }

    def get_total_income(self, obj):
        # Calculate the total income for the service
        total_offering = sum(income.offering or 0 for income in obj.income.all())
        total_tithe = sum(income.tithe or 0 for income in obj.income.all())
        total_thanksgiving = sum(
            income.thanksgiving or 0 for income in obj.income.all()
        )
        total_shiloh_sacrifice = sum(
            income.shiloh_sacrifice or 0 for income in obj.income.all()
        )
        total_projects = sum(income.projects or 0 for income in obj.income.all())

        return {
            "offering": total_offering,
            "tithe": total_tithe,
            "thanksgiving": total_thanksgiving,
            "shiloh_sacrifice": total_shiloh_sacrifice,
            "projects": total_projects,
        }


class TotalAttendanceSerializer(serializers.Serializer):
    total_attendance = serializers.IntegerField()
    total_new_converts = serializers.IntegerField()
    total_first_timers = serializers.IntegerField()


class TotalIncomeSerializer(serializers.Serializer):
    total_income = serializers.IntegerField()
    total_offering = serializers.IntegerField()
    total_tithe = serializers.IntegerField()
    total_thanksgiving = serializers.IntegerField()
    total_shiloh_sacrifice = serializers.IntegerField()
    total_projects = serializers.IntegerField()