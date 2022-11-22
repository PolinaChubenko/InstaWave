from django.shortcuts import render, HttpResponse

def index():
    return HttpResponse('hello world!!!')
