from django.db import models
from django.contrib.auth.models import User


class Following(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    following_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followers")

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'following_user'],
                name="unique_followers"
            ),
            models.CheckConstraint(
                check=~models.Q(user_id=models.F("following_user")),
                name="prevent_self-following"
            ),
        ]

    def __str__(self) -> str:
        return f"{self.user.username} follows {self.following_user.username}"

