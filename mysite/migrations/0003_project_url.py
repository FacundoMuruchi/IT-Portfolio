# Generated by Django 5.2 on 2025-04-09 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_remove_project_description_alter_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
