from rest_framework import viewsets
from .serializers import LikeSerializer
from .models import Like


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def get_queryset(self):
        if 'who' in self.request.query_params and 'what' in self.request.query_params:
            return Like.objects.filter(user=self.request.query_params['who'],
                                       post=self.request.query_params['what'])
        return super().get_queryset()

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)
