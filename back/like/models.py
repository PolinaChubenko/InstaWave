from django.db import models
from django.contrib.auth.models import User
from post.models import Post


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="liker")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="liked_post")

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['post', 'user'],
                name="unique_likes"
            ),
        ]

    def __str__(self) -> str:
        return f"{self.user.username} liked post {self.post.id}"
