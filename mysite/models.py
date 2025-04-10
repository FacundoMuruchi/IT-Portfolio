from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='gifs/')
    url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='skills/')

    def __str__(self):
        return self.title