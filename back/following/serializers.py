from rest_framework import serializers
from .models import Following
from user.serializers import UserSerializer


class FollowingSerializer(serializers.ModelSerializer):
    user_id = UserSerializer(read_only=True)
    following_user_id = UserSerializer(read_only=True)

    class Meta:
        model = Following
        fields = ['id', 'user_id', 'following_user_id']
