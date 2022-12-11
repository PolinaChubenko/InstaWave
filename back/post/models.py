from django.db import models
from blog.models import Blog


class Post(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="posts", null=True)
    date_creation = models.DateField(auto_now=True, editable=False)

    @property
    def total_likes(self):
        return self.liked_post.all().count()

    def __str__(self) -> str:
        return f"created {str(self.date_creation)} by {self.blog.user.username}"