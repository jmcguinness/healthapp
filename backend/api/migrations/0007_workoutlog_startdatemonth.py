# Generated by Django 5.0.6 on 2024-08-26 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_liftstats'),
    ]

    operations = [
        migrations.AddField(
            model_name='workoutlog',
            name='startDateMonth',
            field=models.FloatField(max_length=2, null=True),
        ),
    ]
