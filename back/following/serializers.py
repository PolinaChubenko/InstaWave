from rest_framework import serializers
from .models import Following
from user.serializers import UserSerializer


class FollowingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Following
        fields = ['id', 'user', 'following_user']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['following_user'] = UserSerializer(instance.following_user).data
        return response
