from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class BackendUser(AbstractUser):
    user_type = (
        ("Super Admin", 1),
        ("Admin", 2),
    )

    first_name = models.CharField(max_length=200,null=True)
    last_name = models.CharField(max_length=200,null=True)
    email = models.CharField(max_length=500,null=True)
    password = models.CharField(max_length=500,null=True)
    user_type = models.IntegerField( choices=user_type,null=True)
    verification_code = models.IntegerField(null=True)

    class Meta:
        db_table = 'backend_user'


class AppUser(models.Model):
    user_type = (
        ("Company", 1),
        ("User", 2),
    )

    email = models.CharField(max_length=500,null=True)
    password = models.CharField(max_length=500,null=True)
    user_type = models.IntegerField(choices=user_type,null=True)

    class Meta:
        db_table = 'app_user'


class CompanyDetails(models.Model):
    app_user = models.ForeignKey(AppUser, on_delete=models.SET_NULL, null=True)    
    ride_available_emails = models.CharField(max_length=500)
    confirmation_and_tips_charge_emails = models.CharField(max_length=500)
    invoice_emails = models.CharField(max_length=500)
    number_for_customer = models.CharField(max_length=500)
    private_phone_number_for_fast_taxi = models.CharField(max_length=500)
    mobile_number_for_sms_country_code = models.CharField(max_length=500)
    mobile_number_for_sms_number = models.CharField(max_length=500)
    
    company_name = models.CharField(max_length=500)
    chamber_of_commerce_number = models.CharField(max_length=500)
    passenger_transport_number = models.CharField(max_length=500)
    zip = models.CharField(max_length=500)
    city = models.CharField(max_length=500)
    state = models.CharField(max_length=500)
    street = models.CharField(max_length=500)   
    municipilaties = models.ManyToManyField('Municipalities')
    new_ride_email_notification = models.IntegerField(default=0)
    new_ride_app_notification = models.IntegerField(default=0)

    name_of_account_holder = models.CharField(max_length=200)
    iban = models.CharField(max_length=200)
    vat_number = models.CharField(max_length=200)
    airport_transportation = models.IntegerField(default=0)
    a_to_b_transport = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    station_wagon = models.IntegerField(default=0)
    bus = models.IntegerField(default=0)
    luxury = models.IntegerField(default=0)
    electric = models.IntegerField(default=0)
    nameplate = models.IntegerField(default=0)
    baby_chair = models.IntegerField(default=0)
    high_chair = models.IntegerField(default=0)
    tx_hallmark = models.IntegerField(default=0)
    airports = models.ManyToManyField('airports', through="CompanyAirports")

    class Meta:
        db_table = 'company_details'

class CompanyContacts(models.Model):
    company_id = models.ForeignKey(AppUser, related_name="contact_company_id", on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    function = models.CharField(max_length=200)
    email = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=200)

    class Meta:
        db_table = 'company_contacts'

class Municipalities(models.Model):
    name = models.CharField(max_length=500)

    class Meta:
        db_table = 'municiplities'

class Provinces(models.Model):
    name = models.CharField(max_length=500)

    class Meta:
        db_table = 'provinces'

class Airports(models.Model):
    name = models.CharField(max_length=500)
    prvoinces = models.ForeignKey(Provinces, on_delete=models.CASCADE)

    class Meta:
        db_table = 'airports'


class CompanyAirports(models.Model):
    airport = models.ForeignKey(Airports, on_delete=models.CASCADE)
    company_details = models.ForeignKey(CompanyDetails, on_delete=models.CASCADE)

    class Meta:
        db_table = 'company_airports'

        