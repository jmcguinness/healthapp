# Generated by Django 5.0.6 on 2024-06-28 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_workoutlog_acitivityid_remove_workoutlog_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewWorkout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workoutSelected', models.CharField(max_length=25)),
                ('runDetails', models.CharField(max_length=250)),
                ('lift1', models.CharField(max_length=25)),
                ('lift1Details', models.CharField(max_length=100)),
                ('lift2', models.CharField(max_length=25)),
                ('lift2Details', models.CharField(max_length=100)),
                ('lift3', models.CharField(max_length=25)),
                ('lift3Details', models.CharField(max_length=100)),
                ('lift4', models.CharField(max_length=25)),
                ('lift4Details', models.CharField(max_length=100)),
                ('lift5', models.CharField(max_length=25)),
                ('lift5Details', models.CharField(max_length=100)),
                ('lift6', models.CharField(max_length=25)),
                ('lift6Details', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameField(
            model_name='workoutlog',
            old_name='activityID',
            new_name='activityId',
        ),
    ]
