from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import BlogSerializer, BlogsSerializer
from .models import Blog


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_serializer_class(self):
        if 'pk' in self.kwargs:
            return BlogSerializer
        return BlogsSerializer

