from rest_framework import viewsets
from .serializers import LikeSerializer
from .models import Like
from post.models import Post


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)
