from django.db import models
from django.contrib.auth.models import User
from blog.models import Blog

class Post(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="posts", null=True)
    date_creation = models.DateField(auto_now=True, editable=False)

    def __str__(self) -> str:
        return str(self.blog.user.username)