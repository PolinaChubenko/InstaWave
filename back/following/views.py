from rest_framework import viewsets, permissions
from .serializers import FollowingSerializer
from .models import Following


class FollowingViewSet(viewsets.ModelViewSet):
    queryset = Following.objects.all()
    serializer_class = FollowingSerializer

    def get_queryset(self):
        if 'id' in self.request.query_params:
            return Following.objects.filter(user=self.request.query_params['id'])
        return super().get_queryset()

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)

