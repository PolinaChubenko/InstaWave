from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from .models import Post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.validated_data['blog'] = self.request.user.blog
        return super().perform_create(serializer)

