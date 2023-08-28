from django.conf import settings


def app_session_object(request):
    context = {}
    print("working")
    context['domain_url'] = settings.DOMAIN_URL
    return context