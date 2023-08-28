# Generated by Django 4.2 on 2023-04-03 15:45

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Airports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
            options={
                'db_table': 'airports',
            },
        ),
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=500, null=True)),
                ('password', models.CharField(max_length=500, null=True)),
                ('user_type', models.IntegerField(choices=[('Company', 1), ('User', 2)], null=True)),
            ],
            options={
                'db_table': 'app_user',
            },
        ),
        migrations.CreateModel(
            name='CompanyAirports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('airport', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base_models.airports')),
            ],
            options={
                'db_table': 'company_airports',
            },
        ),
        migrations.CreateModel(
            name='Municipalities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
            options={
                'db_table': 'municiplities',
            },
        ),
        migrations.CreateModel(
            name='Provinces',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
            options={
                'db_table': 'provinces',
            },
        ),
        migrations.CreateModel(
            name='CompanyDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ride_available_emails', models.CharField(max_length=500)),
                ('confirmation_and_tips_charge_emails', models.CharField(max_length=500)),
                ('invoice_emails', models.CharField(max_length=500)),
                ('number_for_customer', models.CharField(max_length=500)),
                ('private_phone_number_for_fast_taxi', models.CharField(max_length=500)),
                ('mobile_number_for_sms_country_code', models.CharField(max_length=500)),
                ('mobile_number_for_sms_number', models.CharField(max_length=500)),
                ('company_name', models.CharField(max_length=500)),
                ('chamber_of_commerce_number', models.CharField(max_length=500)),
                ('passenger_transport_number', models.CharField(max_length=500)),
                ('zip', models.CharField(max_length=500)),
                ('city', models.CharField(max_length=500)),
                ('state', models.CharField(max_length=500)),
                ('street', models.CharField(max_length=500)),
                ('new_ride_email_notification', models.IntegerField(default=0)),
                ('new_ride_app_notification', models.IntegerField(default=0)),
                ('name_of_account_holder', models.CharField(max_length=200)),
                ('iban', models.CharField(max_length=200)),
                ('vat_number', models.CharField(max_length=200)),
                ('airport_transportation', models.IntegerField(default=0)),
                ('a_to_b_transport', models.IntegerField(default=0)),
                ('speed', models.IntegerField(default=0)),
                ('station_wagon', models.IntegerField(default=0)),
                ('bus', models.IntegerField(default=0)),
                ('luxury', models.IntegerField(default=0)),
                ('electric', models.IntegerField(default=0)),
                ('nameplate', models.IntegerField(default=0)),
                ('baby_chair', models.IntegerField(default=0)),
                ('high_chair', models.IntegerField(default=0)),
                ('tx_hallmark', models.IntegerField(default=0)),
                ('airports', models.ManyToManyField(through='base_models.CompanyAirports', to='base_models.airports')),
                ('app_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base_models.appuser')),
                ('municipilaties', models.ManyToManyField(to='base_models.municipalities')),
            ],
            options={
                'db_table': 'company_details',
            },
        ),
        migrations.CreateModel(
            name='CompanyContacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('function', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=500)),
                ('phone_number', models.CharField(max_length=200)),
                ('company_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='contact_company_id', to='base_models.appuser')),
            ],
            options={
                'db_table': 'company_contacts',
            },
        ),
        migrations.AddField(
            model_name='companyairports',
            name='company_details',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base_models.companydetails'),
        ),
        migrations.AddField(
            model_name='airports',
            name='prvoinces',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base_models.provinces'),
        ),
        migrations.CreateModel(
            name='BackendUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('first_name', models.CharField(max_length=200, null=True)),
                ('last_name', models.CharField(max_length=200, null=True)),
                ('email', models.CharField(max_length=500, null=True)),
                ('password', models.CharField(max_length=500, null=True)),
                ('user_type', models.IntegerField(choices=[('Super Admin', 1), ('Admin', 2)], null=True)),
                ('verification_code', models.IntegerField(null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'db_table': 'backend_user',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
