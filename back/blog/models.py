from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    quote = models.CharField(max_length=65, default='Теперь я тоже в instawave')
    avatar = models.ImageField(upload_to="avatars", default='avatars/default_avatar.png')

    @property
    def total_followings(self):
        return self.user.following.all().count()

    @property
    def total_followers(self):
        return self.user.followers.all().count()

    def __str__(self) -> str:
        return str(self.user.username)
