# Generated by Django 4.0.2 on 2022-05-18 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geolocation', '0002_alter_geolocation_latitude_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geolocation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
