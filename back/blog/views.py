from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, permissions
from .serializers import BlogSerializer, BlogsSerializer
from .models import Blog


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if 'pk' in self.kwargs:
            return BlogSerializer
        return BlogsSerializer

