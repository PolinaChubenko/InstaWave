from rest_framework import viewsets, permissions
from .serializers import FollowingSerializer
from .models import Following


class FollowingViewSet(viewsets.ModelViewSet):
    queryset = Following.objects.all()
    serializer_class = FollowingSerializer

    def get_queryset(self):
        if 'who' in self.request.query_params and 'whom' in self.request.query_params:
            return Following.objects.filter(user=self.request.query_params['who'],
                                            following_user=self.request.query_params['whom'])
        return super().get_queryset()

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)

