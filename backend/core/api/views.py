from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import UserProfile, CustomUser
from members.models import Members
from outreach.models import NewConvert
from management.models import Service,Attendance,Income
from .serializers import (
    UserProfileSerializer,
    UserSerializer,
    MembersSerializers,
    NewConvertSerializers,
    ServiceSerializer,
    TotalAttendanceSerializer,
    TotalIncomeSerializer,
    AttendanceSerializer,
)


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
    queryset = Members.objects.all()
    serializer_class = MembersSerializers


class MembersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Members.objects.all()
    serializer_class = MembersSerializers


class ListCreateNewConverts(generics.ListCreateAPIView):
    queryset = NewConvert.objects.all()
    serializer_class = NewConvertSerializers


class ListServices(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class CreateAttendanceView(generics.CreateAPIView):
    queryset =Attendance.objects.all()
    serializer_class=AttendanceSerializer

class ServicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class TotalAttendanceView(APIView):
    def get(self, request):
        all_attendance = Attendance.objects.all()
        total_males = 0
        total_females = 0
        total_children = 0
        total_first_timers = 0
        total_new_converts = 0

        for attendance in all_attendance:
            total_males += attendance.males or 0
            total_females += attendance.females or 0
            total_children += attendance.children or 0
            total_first_timers += attendance.first_timers
            total_new_converts += attendance.new_converts

        total_attendance = total_males + total_females + total_children

        data = {
            'total_new_converts': total_new_converts,
            'total_attendance': total_attendance,
            'total_first_timers': total_first_timers,
            
        }
        serializer = TotalAttendanceSerializer(data)
        return Response(serializer.data)
    

class TotalIncomeView(APIView):
    def get(self, request):
        all_income = Income.objects.all()
        total_offering = 0
        total_tithe = 0
        total_thanksgiving = 0
        total_projects = 0
        total_shiloh_sacrifice = 0

        for income in all_income:
            total_offering += income.offering or 0
            total_tithe += income.tithe or 0
            total_thanksgiving += income.thanksgiving or 0
            total_projects += income.projects
            total_shiloh_sacrifice += income.shiloh_sacrifice

        total_income = total_offering + total_tithe + total_thanksgiving + total_projects

        data = {

            'total_income': total_income,
            "total_offering":total_offering,
            'total_tithe':total_tithe,
            'total_thanksgiving':total_thanksgiving,
            'total_projects':total_projects,
            'total_shiloh_sacrifice':total_shiloh_sacrifice

            
        }
        serializer = TotalIncomeSerializer(data)
        return Response(serializer.data)
    