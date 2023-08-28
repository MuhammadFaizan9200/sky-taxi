	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl)
	})


$(document).on('change','.from_type', function(e, value_trigger){
	var value ='';
	value = $(this).val();
	if (typeof value_trigger === 'undefined') {
		// Perform your desired actions here
		value = value;
	} else {
		value = value_trigger;
	}	
	// Type 2 for Postal Code
	if (value == 2) {
		$('.city_div').hide();
		$('.no_area').show();
		$('.address1_input').show()
		$('.from_airports').addClass('d-none');	
		$('.get_from_postal_code').removeClass('d-none')
		$('.get_from_address_postal_code').addClass('d-none')
		$('.no_area').removeClass('col-4');
		$('.no_area').addClass('col-2');
		$('.address1_input').removeClass('col-7')
		$('.address1_input').addClass('col-6')
		$('.to_type').trigger('change', 2);

	}
	// Type 1 for Airports
	else if (value == 1) {
		if (value_trigger == 1) {
			$('.from_type').val("1")
		}
		$('.city_div').hide();
		$('.no_area').hide();
		$('.address1_input').hide()
		$('.from_airports').removeClass('d-none');	
		$('.get_from_postal_code').addClass('d-none')
		$('.get_from_address_postal_code').addClass('d-none')
		$('.to_type').trigger('change', 3);
	}
	// Type 3 for address
	else {
		if (value_trigger == 3) {
			$('.from_type').val("3")
		}
		$('.city_div').show();
		$('.address1_input').show()
		$('.no_area').show();
		$('.get_from_postal_code').addClass('d-none')
		$('.get_from_address_postal_code').removeClass('d-none')
		$('.get_from_address_postal_code').addClass('d-block')
		$('.no_area').removeClass('col-2');
		$('.no_area').addClass('col-4');
		$('.address1_input').removeClass('col-6')
		$('.address1_input').addClass('col-7')
		$('.from_airports').addClass('d-none');	
		$('.to_type').trigger('change', 1);

	}
})

$(document).on('change','.to_type', function(e, value_trigger){
	var value ='';
	value = $(this).val();
	if (typeof value_trigger === 'undefined') {
		// Perform your desired actions here
		value = value;
	} else {
		value = value_trigger;
	}	
	// Type 3 for address
	if (value == 3) {
		if (value_trigger == 3) {
			$('.to_type').val("3")
		}
		$('.to_airports').addClass('d-none');
		$('.to_city_div').removeClass('d-none');
		$('.address2_input').removeClass('d-none');
		$('.to_no_area').removeClass('d-none');

		$('.get_to_postal_code').removeClass('d-block');
		$('.get_to_postal_code').addClass('d-none');

		$('.from_type').trigger('change', 1);	
	}
	// Type 2 for Postal Code
	else if (value == 2) {
		if (value_trigger == 2) {
			$('.to_type').val("2")
		}
		$('.to_airports').addClass('d-none');
		$('.to_city_div').addClass('d-none');

		$('.get_to_postal_code').removeClass('d-none');
		$('.get_to_postal_code').addClass('d-block');
		$('.get_to_address_postal_code').removeClass('d-block');
		$('.get_to_address_postal_code').addClass('d-none');
		$('.to_no_area').removeClass('d-none');	
		$('.address2_input').removeClass('col-7')
		$('.address2_input').addClass('col-6')
		$('.to_no_area').removeClass('col-4');
		$('.to_no_area').addClass('col-2');
		$('.from_type').trigger('change', 2);	
	}
	// Type 1 for Airports
	else {
		if (value_trigger == 1) {
			$('.to_type').val("1")
		}
		$('.to_airports').removeClass('d-none');
		$('.to_city_div').addClass('d-none');
		$('.address2_input').addClass('d-none');
		$('.to_no_area').addClass('d-none');	
		$('.get_to_postal_code').removeClass('d-block');
		$('.get_to_postal_code').addClass('d-none');
		$('.get_to_address_postal_code').removeClass('d-block');
		$('.get_to_address_postal_code').addClass('d-none');
		$('.from_type').trigger('change', 3);	
	}
})

//

$(document).on('change','.total_passenger', function(e){
	var value =  $(this).val();
	if (value > 4) {
		$('.vehicle_type').val(2)
	} else {
		$('.vehicle_type').val(1)
	}
})

var postal_code_from = '';
var postal_code_to =  '';
var total_passenger = '';
var vehicle_type = '';
var house_number_from = '';
var house_number_to = '';
$(document).on('click','.caluculate_free', function(e){
	postal_code_from =  $('.from_postal_code').val();
	postal_code_to =  $('.to_postal_code').val();
    total_passenger = $('.total_passenger').val();
    vehicle_type = $('.vehicle_type').val();
    house_number_from = $('.house_number_from').val();
    house_number_to = $('.house_number_to').val();
	$('.caluculate_free').text("Processing..");
	$('.caluculate_free').attr('disabled', true);
	if (postal_code_from == "") {
		postal_code_from = $('.from_addres').val();
	}
	if (postal_code_to == "") {
		postal_code_to = $('.to_address').val();
	}

	// Initialize an empty array to store the addresses
		const addressesArray = [];

		// Get the "from_address" value and add it to the array
		const fromAddress = $('.from_addres').val();
		addressesArray.push(fromAddress);

		// Loop through each "other_address" textbox and add its value to the array
		$('.dynamic_address input[name="other_address"]').each(function() {
		const otherAddress = $(this).val();
		addressesArray.push(otherAddress);
		});

		// Get the "to_address" value and add it to the array
		const toAddress = $('.to_address').val();
		addressesArray.push(toAddress);

		console.log(addressesArray)

	form_data = {}
	if (postal_code_to != "" && postal_code_from != "") {
	caluculate_free(addressesArray).then(r => '');
	async function caluculate_free(address_string) {
			try {
				const endpoint = 'get_quotation';
				const request_type = 'post';
				const payload = JSON.stringify({
					'postal_codes': address_string
				  })
				let total_kilometers = 0;
				const response = await request(request_type, payload, endpoint);

				if (response.status == 1) {
					showmessage('success',response.developer_message,'Success');
					let totalSum = 0;
					let totalKilometersAmount = 0;

					var locations = response['locations'];
					const resultArray = [];

					$.each(locations, function (index, location) {
						// Access properties of each location
						const fromPostal = location.from_postal;
						const toPostal = location.to_postal;
						const totalKilometers = parseFloat(location.total_kilometers);
						const price = location.price;
  						totalSum += price;
						totalKilometersAmount += totalKilometers;

						// Push the values as an object into the result array
						resultArray.push({
							from_postal: fromPostal,
							to_postal: toPostal,
							total_kilometers: totalKilometers,
							price: price
						});
						
					  });

					// Convert the result array to a JSON string
					const locationresultJSON = JSON.stringify(resultArray);

					$('.totalprice').text("€"+totalSum);
					$('.reservation_price').val(totalSum);
					$('.get_to_location').text(postal_code_to)
					$('.get_from_location').text(postal_code_from)
					
					$('.kilometer').val(totalKilometersAmount)

                    localStorage.setItem('reservation_price', totalSum);
                    localStorage.setItem('postal_code_to', postal_code_to);
                    localStorage.setItem('postal_code_from', postal_code_from);
                    localStorage.setItem('total_kilometers', total_kilometers);
                    localStorage.setItem('house_number_from', house_number_from);
                    localStorage.setItem('house_number_to', house_number_to);
					localStorage.setItem('total_passenger', total_passenger);
					localStorage.setItem('vehicle_type', vehicle_type);
					localStorage.setItem('locations', locationresultJSON);

					setTimeout(function () {
						$('.first_step').removeClass('d-block');
						$('.first_step').addClass('d-none');
						$('.second_step').removeClass('d-none');
						$('.second_step').addClass('d-block');
					}, 3000);

				} else {
					showmessage('error',response.developer_message,'Error');
					$('.caluculate_free').text("Calculate fare");
					$('.caluculate_free').attr('disabled', false);
				}

			} catch(err) {
				console.log(err);
			}
		}
	} else {
		showmessage('error','Select correct location','Error');
		$('.caluculate_free').text("Calculate fare");
		$('.caluculate_free').attr('disabled', false);
	}

})


function set_hidden_value(pickup_date, pickup_time, address1_input, address2_input, return_pickup_date,
    return_pickup_time, total_passenger, full_name, phone, email, no_of_bags, no_of_hand_bags, reservation_price) {
          
    var reservation_price = localStorage.getItem('reservation_price');
    $('.set_pickup_date').text(pickup_date)
    $('.set_pickup_time').text(pickup_time)
    $('.set_from').text(address1_input)
    $('.set_to').text(address2_input)
    $('.set_return_pickup_date').text(return_pickup_date)
    $('.set_return_pickup_time').text(return_pickup_time)
    $('.set_person').text(total_passenger)
    $('.set_name').text(full_name)
    $('.set_phone').text(phone)
    // $('.set_email').text(email)
    $('.set_bags').text(no_of_bags)
    $('.set_handbag').text(no_of_hand_bags)
    $('.set_price').text(reservation_price)

}


$(document).on('click','.btn_second_step', function(e){
	var pickup_date = $('.pickup_date').val();
	var pickup_time = $('.pickup_time').val();
	var  user_id = $(this).attr('user_id');
	is_reutrn = $('.is_reutrn').val();

	flight_number = $('.flight_number').val();
	return_pickup_date = $('.return_pickup_date').val();
	return_pickup_time = $('.return_pickup_time').val();
	reservation_by_id = $('.reservation_by_id').val();
	reservation_price = $('.reservation_price').val();

	if (pickup_date == "") {
		showmessage('error','Select pickup date','Error');
	} else if (pickup_time == "") {
		showmessage('error','Select pickup datetime','Error');
	} else {
		if (user_id == "") {
			login_popup_data();
		}
		else if (get_user_level == 1) {
			company_popup_data();
		}
		else {
			 window.location.href = "/login";
		}
		localStorage.setItem('pickup_date', pickup_date);
		localStorage.setItem('pickup_time', pickup_time);
		localStorage.setItem('is_reutrn', is_reutrn);
		localStorage.setItem('flight_number', flight_number);
		localStorage.setItem('return_pickup_date', return_pickup_date);
		localStorage.setItem('return_pickup_time', return_pickup_time);
		localStorage.setItem('reservation_by_id', reservation_by_id);
		localStorage.setItem('reservation_price', reservation_price);
	}
})

let full_name = '', email = '', postal_code = '', pickup_date = '',
pickup_time = '', no_of_bags = '', no_of_hand_bags = '',
 driver_comment = '',
  is_return = '', flight_number = '', return_pickup_date = '',
   return_pickup_time = '', reservation_by_id = '', reservation_price = '',
    is_reutrn = '', phone = '';

$(document).on('click','.btn_third_step', function(e){
	full_name = $('.name').val();
	email = $('.email').val();
	postal_code = $('.postal_code').val();
	var pickup_date =  localStorage.getItem('pickup_date');
	var pickup_time = localStorage.getItem('pickup_time');
	no_of_bags = $('.no_of_bags').val();
	no_of_hand_bags = $('.no_of_hand_bags').val();
	driver_comment = $('.driver_comment').val();
	reservation_price = $('.reservation_price').val();
	let address1_input = $('#address1-input').val();
	let address2_input = $('#address2-input').val();
	phone = $('.phone').val();
	$('.btn_third_step').text("Processing..");
	$('.btn_third_step').attr('disabled', true);
	var driver_comment = $('.driver_comment').val();
	if (full_name == "") {
		showmessage('error','Add your name','Error');
		$('.btn_third_step').text("Next step");
		$('.btn_third_step').attr('disabled', false);

	} else if (phone == "") {
		showmessage('error','Add your phone','Error');
		$('.btn_third_step').text("Next step");
		$('.btn_third_step').attr('disabled', false);

	} else if (email == "") {
		showmessage('error','Add your email','Error');
		$('.btn_third_step').text("Next step");
		$('.btn_third_step').attr('disabled', false);
	} else if (driver_comment == "") {
		showmessage('error','Add your comment','Error');
		$('.btn_third_step').text("Next step");
		$('.btn_third_step').attr('disabled', false);
	} else {
        $('.tab_1').removeClass('active-btn');
        $('.tab_2').addClass('active-btn');
		$('.tab_detail_1').removeClass('active-tab');
        $('.tab_detail_2').addClass('active-tab');

        localStorage.setItem('full_name', full_name);
        localStorage.setItem('phone', phone);
        localStorage.setItem('no_of_bags', no_of_bags);
        localStorage.setItem('no_of_hand_bags', no_of_hand_bags);
        localStorage.setItem('driver_comment', driver_comment);
        set_hidden_value(pickup_date, pickup_time, address1_input, address2_input, return_pickup_date,
            return_pickup_time, total_passenger, full_name, phone, email, no_of_bags, no_of_hand_bags, reservation_price)

		
	}
})


$(document).on('click','.btn_forth_step', function(e){
	$('.tab_2').removeClass('active-btn');
    $('.tab_3').addClass('active-btn');
    $('.tab_detail_2').removeClass('active-tab');
    $('.tab_detail_3').addClass('active-tab');

})

$(document).on('click','.is_reutrn', function(e){
	const isChecked = $(this).is(":checked");
	var totalprice = $('.totalprice').text();
	totalprice = totalprice.replace(/\$/g, '');
	
	if (isChecked) {
		$('.return_area').removeClass('d-none');
		$('.return_view_area').addClass('d-block')
		$('.return_view_area').removeClass('d-none')
		$('.return_view_area').addClass('d-block')
		totalprice = parseInt(totalprice) * 2;
		$('.totalprice').text("€"+totalprice);
	
	} else {
		$('.return_area').addClass('d-none');
		$('.return_view_area').addClass('d-none')
		$('.return_view_area').removeClass('d-block')
		$('.return_view_area').addClass('d-none')
		totalprice = parseInt(totalprice) * 1;
		$('.totalprice').text("€"+totalprice);
	
	}
})


$(document).on('click','.fifth_step_btn', function(e){
	let from_postal_code = $('.result1').val();
	let to_postal_code = $('.result2').val();
	var kilometer = localStorage.getItem('total_kilometers');
	var phone = localStorage.getItem('phone');
	
	var total_passenger = localStorage.getItem('total_passenger');
	var vehicle_type =  localStorage.getItem('vehicle_type');
	var postal_code_to = localStorage.getItem('postal_code_to');
	var postal_code_from = localStorage.getItem('postal_code_from');

	var pickup_date = localStorage.getItem('pickup_date');
	var pickup_time = localStorage.getItem('pickup_time');

	var flight_number = localStorage.getItem('flight_number');
	var return_pickup_date = localStorage.getItem('return_pickup_date');
	var return_pickup_time = localStorage.getItem('return_pickup_time');
	var reservation_by_id = localStorage.getItem('reservation_by_id');
	var is_reutrn = localStorage.getItem('is_reutrn');
	var reservation_price = localStorage.getItem('reservation_price');
	var locations = localStorage.getItem('locations');
	console.log("-------------------------------")
	console.log(locations)

	$('.fifth_step_btn').text("Processing...");
	$('.fifth_step_btn').attr('disabled', true);
//	$('.fifth_step').addClass('d-none');
	reservation().then(r => '');
	async function reservation() {
			try {
				const endpoint = 'reservation';
				const request_type = 'post';
				const payload =  JSON.stringify({
                        "return_pickup_time": return_pickup_time,
                        "return_pickup_date": return_pickup_date,
                        "is_reutrn": is_reutrn,
                        "driver_comment": driver_comment,
                        "name": full_name,
                        "vehicle_type": vehicle_type,
                        "pickup_time": pickup_time,
                        "reservation_by_id": user_id,
                        "no_of_hand_bags": no_of_hand_bags,
                        "pickup_date": pickup_date,
                        "no_of_bags": no_of_bags,
                        "flight_number": flight_number,
                        "email": email,
                        "total_passenger": total_passenger,
						"kilometer" : kilometer,
						"phone_number" : phone,
						"locations": JSON.parse(locations)
						
                    })
				const response = await request(request_type, payload, endpoint);
				console.log(response)
				if (response.status == 1) {
					showmessage('success',response.developer_message,'Success');
					localStorage.clear();
					 setTimeout(function() {
						window.location.href = "/myrides/";
					}, 3000 );
				} else {
					$('.fifth_step_btn').text("Confirm Payment");
					$('.fifth_step_btn').attr('disabled', false);
					showmessage('error',response.developer_message,'Error');
				}
			} catch(err) {
				console.log(err);
			}
		}
})



$(document).ready(function() {
   // Code here
   fetch_airports().then(r => '');
	async function fetch_airports() {
			try {
				const endpoint = 'get_airports';
				const request_type = 'post';
				const payload = JSON.stringify({
				'province_id': [
					0
					]
				});
				const response = await request(request_type, payload, endpoint);
				var response_data = response['data'];
				$('.from_airports_fetch').empty();
				$('.to_airports_fetch').empty();
				$('.from_airports_fetch').append(`<option value="0">Select Airport</option>`);
				$('.to_airports_fetch').append(`<option value="0">Select Airport</option>`);
				response_data.forEach(function(data) {
					$('.from_airports_fetch').append(`<option value="${data.name}">${data.name}</option>`)
					$('.to_airports_fetch').append(`<option value="${data.name}">${data.name}</option>`)
				})
			} catch(err) {
				console.log(err);
			}
		}
});

$(document).ready(function() {
  // Apply the input mask and validation
  $('#phone-input').inputmask({
    mask: '+31999999999',  // Replace '9' with any allowed digit placeholder
    greedy: false,  // Prevents the user from adding additional characters beyond the mask
    placeholder: ' ',  // Uses a space as a placeholder for optional digits
    clearMaskOnLostFocus: true  // Clears the mask when the input field loses focus
  });

  // Event listener for keyup
  $('#phone-input').on('keyup', function() {
    if ($(this).inputmask('isComplete')) {
      $(this).removeClass('invalid');
      $(this).addClass('valid');
    } else {
      $(this).removeClass('valid');
      $(this).addClass('invalid');
    }
  });



})




