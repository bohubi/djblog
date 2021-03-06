from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    author = models.ForeignKey(User)
    image = models.URLField()