from django.urls import path
from .views import UserProfileList, UserProfileDetail, RegisterUser

urlpatterns = [
    path("profiles/", UserProfileList.as_view()),
    path("profiles/<int:pk>/", UserProfileDetail.as_view()),
    path("register/", RegisterUser.as_view()),
]
