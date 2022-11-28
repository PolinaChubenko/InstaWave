from django.db import models
from django.contrib.auth.models import User


class Following(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    following_user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followers")

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user_id', 'following_user_id'],
                name="unique_followers"
            ),
            models.CheckConstraint(
                check=~models.Q(user_id=models.F("following_user_id")),
                name="prevent_self-following"
            ),
        ]

    def __str__(self) -> str:
        return f"{self.user_id.username} follows {self.following_user_id.username}"

