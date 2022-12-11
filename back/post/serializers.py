from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    total_likes = serializers.IntegerField(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'blog', 'image', 'date_creation', 'total_likes']
