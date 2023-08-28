function request(request_type, payload, endpoint) {
  if (user_id == "") {
    user_id = session_user_id;
  }

    return $.ajax({
      url: '' + domain_url + '/rest_api/' + endpoint+ '?user_id='+user_id,
      type: request_type,
      dataType: "json",
      data: payload,
      headers: {
        "accept": "application/json",
        'Authorization': 'Bearer '+access_token+'',
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });
  }
  

  function removeVehicleArray(jsonStr) {
    const jsonObj = JSON.parse(jsonStr);
    const vehicleArray = jsonObj.vehicleArray; // Extract the content of vehicleArray
    delete jsonObj.vehicleArray; // Delete the vehicleArray key
    Object.assign(jsonObj, vehicleArray[0]); // Merge the content of vehicleArray into jsonObj
    return JSON.stringify(jsonObj);
  }


  function request_vehicle(request_type, payload, endpoint) {

   const payload_json = removeVehicleArray(payload);
    alert("test")
    alert(user_id)
    console.log(payload_json)
    if (user_id == "") {
      user_id = session_user_id;
    }
    alert(user_id)
      return $.ajax({
        url: '' + domain_url + '/rest_api/' + endpoint+ '?company_id='+user_id,
        type: request_type,
        dataType: "json",
        data: payload_json,
        headers: {
          "accept": "application/json",
          'Authorization': 'Bearer '+access_token+'',
          "Content-Type": "application/json"
        },
      });
    }
    