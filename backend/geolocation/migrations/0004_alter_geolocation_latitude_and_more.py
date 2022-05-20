# Generated by Django 4.0.2 on 2022-05-19 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geolocation', '0003_alter_geolocation_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geolocation',
            name='Latitude',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='geolocation',
            name='Longitude',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='geolocation',
            name='name',
            field=models.CharField(default='Name', max_length=55),
        ),
    ]
