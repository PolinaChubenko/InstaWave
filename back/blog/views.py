from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import BLogSerializer
from .models import Blog


def index(request):
    return HttpResponse('hello world!!!')


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BLogSerializer

