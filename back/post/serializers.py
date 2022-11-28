from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    total_likes = serializers.IntegerField()

    class Meta:
        model = Post
        fields = ['id', 'image', 'date_creation', 'total_likes']
