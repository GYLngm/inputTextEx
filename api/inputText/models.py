from django.db import models


class InputText(models.Model):
    my_text = models.CharField(max_length=200)
    update_datetime = models.DateTimeField('date updated')

    def __str__(self):
        return self.my_text
