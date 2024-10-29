from django.db import models

class Livro(models.Model):
    titulo = models.CharField(max_length= 100)
    autor = models.CharField(max_length= 100)
    sinopse = models.TextField
    isbn = models.CharField(max_length= 15)
    datapubli = models.DateField
    genero = models.CharField(max_length= 50)
    paginas = models.IntegerField(max_length= 100)

