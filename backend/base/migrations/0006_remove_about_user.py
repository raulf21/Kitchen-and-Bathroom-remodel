# Generated by Django 3.2.5 on 2021-09-30 21:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_about_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='about',
            name='user',
        ),
    ]
