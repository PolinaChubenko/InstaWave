from rest_framework import serializers
from .models import Blog
from user.serializers import UserSerializer
from post.serializers import PostSerializer


class BlogsSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'user', 'avatar']


class BlogSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    post_set = PostSerializer(read_only=True, many=True)
    total_followings = serializers.IntegerField(read_only=True)
    total_followers = serializers.IntegerField(read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'user', 'quote', 'avatar', 'post_set', 'total_followings', 'total_followers']
