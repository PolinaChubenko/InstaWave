from rest_framework import serializers
from .models import Like
from user.serializers import UserSerializer
from post.serializers import PostSerializer


class LikeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Like
        fields = ['id', 'user', 'post']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['post'] = PostSerializer(instance.post).data
        return response
