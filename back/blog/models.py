from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    quote = models.CharField(max_length=40)
    avatar = models.ImageField(upload_to="avatars", null=True)

    def __str__(self) -> str:
        return str(self.user.username)
