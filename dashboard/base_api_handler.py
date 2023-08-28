import requests


def request_handler(get_domain_url, endpoint, request_type, payload, request):
    user_id = '' if 'user_id' not in request.COOKIES else request.COOKIES['user_id']
    access_token = '' if 'access_token' not in request.COOKIES else request.COOKIES['access_token']
    headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer '+access_token+'',
    }
    url = ''+get_domain_url+'/rest_api/'+endpoint+'?user_id='+user_id+''
    if request_type == 'post':
        response = requests.post(url, data=payload, headers=headers)
    elif request_type == 'get':
        response = requests.get(url, data=payload, headers=headers)
    status_code = response.status_code
    json_data = response.json()
    if status_code == 200:
        return json_data
