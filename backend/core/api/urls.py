from django.urls import path
from .views import UserProfileList, UserProfileDetail

urlpatterns = [
    path('userprofiles/', UserProfileList.as_view()),
    path('userprofiles/<int:pk>/', UserProfileDetail.as_view()),
]