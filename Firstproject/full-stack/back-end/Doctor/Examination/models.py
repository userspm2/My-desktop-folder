from django.db import models


# Create your models here.
class Claimant(models.Model):
    colors=models.CharField(max_length=50)


    def __str__(self):
        return self.colors
    



