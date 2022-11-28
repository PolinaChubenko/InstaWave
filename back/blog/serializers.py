from rest_framework import serializers
from .models import Blog
from user.serializers import UserSerializer


class BLogSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'user', 'quote', 'avatar']
