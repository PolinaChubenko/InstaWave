from django.db import models
from django.contrib.contenttypes.fields import GenericRelation
from blog.models import Blog
from like.models import Like


class Post(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="posts", null=True)
    date_creation = models.DateField(auto_now=True, editable=False)
    likes = GenericRelation(Like)

    @property
    def total_likes(self):
        return self.likes.count()

    def __str__(self) -> str:
        return f"created {str(self.date_creation)} by {self.blog.user.username} with {self.total_likes} likes"