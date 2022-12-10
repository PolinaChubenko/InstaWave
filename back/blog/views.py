from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, permissions
from .serializers import BlogSerializer, BlogsSerializer
from .models import Blog


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if 'user' in self.request.query_params:
            return Blog.objects.filter(user_id=self.request.query_params['user'])
        return super().get_queryset()

    def get_serializer_class(self):
        if 'pk' in self.kwargs:
            return BlogSerializer
        return BlogsSerializer

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_update(serializer)

