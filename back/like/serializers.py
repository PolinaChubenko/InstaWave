from rest_framework import serializers
from generic_relations.relations import GenericRelatedField
from .models import Like
from user.serializers import UserSerializer
from post.serializers import PostSerializer
from post.models import Post


class LikeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    content_object = GenericRelatedField({Post: PostSerializer(read_only=True)})
    # content_object = GenericRelatedField({Post: serializers.HyperlinkedRelatedField(
    #     queryset=Post.objects.all(),
    #     view_name='post-detail'
    # )})

    class Meta:
        model = Like
        fields = ['id', 'user', 'content_object']
