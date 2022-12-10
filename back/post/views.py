from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from .models import Post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        if 'id' in self.request.query_params:
            return Post.objects.filter(id=self.request.query_params['id'])
        return super().get_queryset()

    def perform_create(self, serializer):
        return super().perform_create(serializer)

