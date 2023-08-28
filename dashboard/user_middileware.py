from dashboard.base_api_handler import request_handler
from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse



def get_user_data(request):
    context = {}
    payload = {}
    if 'user_id' in request.COOKIES:
        user_id = request.COOKIES['user_id']
        user_level = request.COOKIES.get('user_level')  # Use get() to handle None gracefully
        institution_checker = request.COOKIES.get('institution_checker')  # Use get() to handle None gracefully
        if user_id and user_level == '1':  # Make sure to compare with a string '2' if that's the expected value
            print("success response")
            response = request_handler(settings.DOMAIN_URL, 'get_company_info', 'get', payload, request)
            print(response)
            if response is not None and 'data' in response and isinstance(response['data'], list):
                item = response['data'][0]  # Assuming you expect only one item in the response
                
                # Assign values from the item to the context dictionary
                context['id'] = item['id']
                context['first_name'] = item['first_name']
                context['last_name'] = item['last_name']
                context['app_user'] = item['app_user']
                context['ride_available_emails'] = item['ride_available_emails']
                context['confirmation_and_tips_charge_emails'] = item['confirmation_and_tips_charge_emails']
                context['invoice_emails'] = item['invoice_emails']
                context['number_for_customer'] = item['number_for_customer']
                context['private_phone_number_for_fast_taxi'] = item['private_phone_number_for_fast_taxi']
                context['mobile_number_for_sms_country_code'] = item['mobile_number_for_sms_country_code']
                context['mobile_number_for_sms_number'] = item['mobile_number_for_sms_number']
                context['company_name'] = item['company_name']
                context['chamber_of_commerce_number'] = item['chamber_of_commerce_number']
                context['passenger_transport_number'] = item['passenger_transport_number']
                context['zip'] = item['zip']
                context['city'] = item['city']
                context['state'] = item['state']
                context['street'] = item['street']
                context['new_ride_email_notification'] = item['new_ride_email_notification']
                context['new_ride_app_notification'] = item['new_ride_app_notification']
                context['name_of_account_holder'] = item['name_of_account_holder']
                context['iban'] = item['iban']
                context['vat_number'] = item['vat_number']
                context['airport_transportation'] = item['airport_transportation']
                context['a_to_b_transport'] = item['a_to_b_transport']
                context['speed'] = item['speed']
                context['station_wagon'] = item['station_wagon']
                context['bus'] = item['bus']
                context['luxury'] = item['luxury']
                context['electric'] = item['electric']
                context['nameplate'] = item['nameplate']
                context['baby_chair'] = item['baby_chair']
                context['high_chair'] = item['high_chair']
                context['tx_hallmark'] = item['tx_hallmark']
                context['municipilaties'] = item['municipilaties']
                context['airports'] = item['airports']
                context['postal_code'] = item['postal_code']

    return context

    # Usage example:
    processed_context = get_user_data(request)
    if processed_context:
        # Use the processed context data
        print(processed_context)
    else:
        # Handle the case when the context processing failed (e.g., log an error, display a message, etc.)
        print("Error processing context.")
