"use strict";
var KTUserListDatatable = function () {
   var first_name = '';
   var last_name = '';
   var ride_available_emails = '';
   var confirmation_and_tips_charge_emails = '';
   var invoice_emails = '';
   var number_for_customer = '';
   var mobile_number_for_sms_number = '';
   var company_name = '';
   var chamber_of_commerce_number = '';
   var house_number = '';
   var house_number_adition = '';
   var zip = '';
   var street = '';
   var street = '';
   var passenger_transport_number = '';
   var city = '';
   var state = '';
   var contact_last_name = '';
   var contact_first_name = '';
   var contact_phone_number = '';
   var contact_function = '';
   var contact_email = '';
   var a_to_b_transport = '';
   var speed = '';
   var station_wagon = '';
   var bus = '';
   var luxury = '';
   var electric = '';
   var nameplate = '';
   var baby_chair = '';
   var high_chair = '';
   var tx_hallmark = '';
   var airport = [];
   var new_ride_app_notification = '';
   var new_ride_email_notification = '';
   var name_of_account_holder = '';
   var iban = '';
   var vat_number = '';
   var airport_transportation = '';
   var vehicleArray = [];
   var postal_code = '';
   $(document).on('click', '.account_info_btn', function (e) {
      e.preventDefault();
      first_name = $('.first_name').val();
      last_name = $('.last_name').val();
      if (first_name == "") {
         $('.first_name').addClass('form_validation');
      } else if (last_name == "") {
         //TODO: i'll change this function
         window.scrollBy(0, 0);
         $('.first_name').removeClass('form_validation');
         $('.last_name').addClass('form_validation');
      } else {
         //TODO: i'll change this function
         window.scrollBy(0, 0);
         $('.last_name').removeClass('form_validation');
         $('.account_info_btn').text("Processing...")
         $('.account_info_btn').attr('disabled', true);
         showmessage('success', 'Company update successfully', 'Success');
         setTimeout(function () {
            $('.account_info_btn').text("Next one");
            $(".account_info_btn").attr("disabled", false);
            go($('#contact'), $('.tablinks:contains("Contact details")'), 'contact');

         }, 3000);
      }
   })


   $(document).on('click', '.contact_details_btn', function (e) {
      e.preventDefault();
      ride_available_emails = $('.ride_available_emails').val();
      confirmation_and_tips_charge_emails = $('.confirmation_and_tips_charge_emails').val();
      invoice_emails = $('.invoice_emails').val();
      number_for_customer = $('.number_for_customer').val();
      mobile_number_for_sms_number = $('.mobile_number_for_sms_number').val();
      if (ride_available_emails == "") {
         $('.ride_available_emails').addClass('form_validation');
         $('.ride_available_emails').focus();
         //TODO: i'll change this function
         window.scrollTo(0, 0);
      } else if (confirmation_and_tips_charge_emails == "") {
         //TODO: i'll change this function
         window.scrollTo(0, 0);
         $('.ride_available_emails').removeClass('form_validation');
         $('.confirmation_and_tips_charge_emails').addClass('form_validation');
         $('.ride_available_emails').focus();
      } else if (invoice_emails == "") {
         //TODO: i'll change this function
         window.scrollTo(0, 0);
         $('.confirmation_and_tips_charge_emails').removeClass('form_validation');
         $('.invoice_emails').addClass('form_validation');
      } else if (number_for_customer == "") {
         //TODO: i'll change this function
         window.scrollTo(0, 0);
         $('.invoice_emails').removeClass('form_validation');
         $('.number_for_customer').addClass('form_validation');
      } else if (mobile_number_for_sms_number == "") {
         //TODO: i'll change this function
         window.scrollTo(0, 0);
         $('.number_for_customer').removeClass('form_validation');
         $('.mobile_number_for_sms_number').addClass('form_validation');
      } else {
         $('.contact_details_btn').text("Processing...")
         $('.contact_details_btn').attr('disabled', true);
         showmessage('success', 'Company update successfully', 'Success');
         setTimeout(function () {
            $('.contact_details_btn').text("Next one");
            $(".contact_details_btn").attr("disabled", false);
            go($('#company'), $('.tablinks:contains("Company")'), 'company');

         }, 3000);
      }
   })

   $(document).on('click', '.company_btn', function (e) {
      e.preventDefault();
      var company_name_attr = $('input.company_name');
      company_name = company_name_attr.val();
      var company_name_class = company_name_attr.attr("class").split(" ")[1];

      var chamber_of_commerce_number_attr = $('input.chamber_of_commerce_number');
      chamber_of_commerce_number = chamber_of_commerce_number_attr.val();
      var chamber_of_commerce_number_class = chamber_of_commerce_number_attr.attr("class").split(" ")[1];

      var passenger_transport_number_attr = $('input.passenger_transport_number');
      passenger_transport_number = passenger_transport_number_attr.val();
      var passenger_transport_number_class = passenger_transport_number_attr.attr("class").split(" ")[1];

      var house_number_attr = $('input.house_number');
      house_number = house_number_attr.val();
      var house_number_class = house_number_attr.attr("class").split(" ")[1];

      var house_number_adition_attr = $('input.house_number_adition');
      house_number_adition = house_number_adition_attr.val();
      var house_number_adition_class = house_number_adition_attr.attr("class").split(" ")[1];

      var zip_attr = $('input.zip');
      zip = zip_attr.val();
      var zip_class = zip_attr.attr("class").split(" ")[1];

      var city_attr = $('input.city');
      city = city_attr.val();
      var city_class = city_attr.attr("class").split(" ")[1];

      var street_attr = $('input.street');
      street = street_attr.val();
      var street_class = street_attr.attr("class").split(" ")[1];

      postal_code = $('.postal_code').val();

      var contact_first_name_attr = $('input.contact_first_name');
      contact_first_name = contact_first_name_attr.val();
      var contact_first_name_class = contact_first_name_attr.attr("class").split(" ")[1];


      var contact_last_name_attr = $('input.contact_last_name');
      contact_last_name = contact_last_name_attr.val();
      var contact_last_name_class = contact_last_name_attr.attr("class").split(" ")[1];


      var contact_function_attr = $('input.contact_function');
      contact_function = contact_function_attr.val();
      var contact_function_class = contact_function_attr.attr("class").split(" ")[1];


      var contact_email_attr = $('input.contact_email');
      contact_email = contact_email_attr.val();
      var contact_email_class = contact_email_attr.attr("class").split(" ")[1];


      var contact_phone_number_attr = $('input.contact_phone_number');
      contact_phone_number = contact_email_attr.val();
      var contact_phone_number_class = contact_phone_number_attr.attr("class").split(" ")[1];
      $('input').each(function () {
         var values = $(this).val()
         if (values != "") {
            $('input').removeClass('form_validation');
         }
      })

      if (company_name == "") {
         validateRequired(company_name_class, "");
      } else if (chamber_of_commerce_number == "") {
         validateRequired(chamber_of_commerce_number_class, company_name_class);
      } else if (passenger_transport_number == "") {
         validateRequired(passenger_transport_number_class, chamber_of_commerce_number_class);
      } else if (zip == "") {
         validateRequired(zip_class, passenger_transport_number_class);
      } else if (city == "") {
         validateRequired(city_class, zip_class);
      } else if (house_number == "") {
         validateRequired(house_number_class, city_class);
      } else if (house_number_adition == "") {
         validateRequired(house_number_adition_class, house_number_class);
      } else if (street == "") {
         validateRequired(street_class, house_number_adition_class);
      } else if (contact_first_name == "") {
         validateRequired(contact_first_name_class, street_class);
      } else if (contact_last_name == "") {
         validateRequired(contact_last_name_class, contact_first_name_class);
      } else if (contact_function == "") {
         validateRequired(contact_function_class, contact_last_name_class);
      } else if (contact_email == "") {
         validateRequired(contact_email_class, contact_function_class);
      } else if (contact_phone_number == "") {
         validateRequired(contact_phone_number_class, contact_email_class);
      } else {
         $('.company_btn').text("Processing...")
         $('.company_btn').attr('disabled', true);
         showmessage('success', 'Company update successfully', 'Success');
         setTimeout(function () {
            $('.company_btn').text("Next one");
            $(".company_btn").attr("disabled", false);
            go($('#transportation'), $('.tablinks:contains("Transportation options")'), 'transportation');

         }, 3000);
      }

   })


   $('.province').on('change', function () {
      var selectedValue = $(this).val();
      var fetch_provinces = '';
      $('.spinner_temparary_class').show();
      if (selectedValue == 1) {

         get_provinces_1().then(r => '');
         async function get_provinces_1() {
            try {
               const endpoint = 'get_provinces';
               const request_type = 'get';
               const payload = {};
               const response = await request(request_type, payload, endpoint);
               var response_data = response['data'];
               if (response.status === 1) {
                  $('.spinner_temparary_class').hide();
                  $('.fetch_provinces').empty();
                  response_data.forEach(function (data) {
                     // do something with `item`
                     fetch_provinces += `<div class="col-4" id="${data.id}">
                <p class="select-box select_box id_${data.id}" id="${data.id}">${data.name}</p>
              </div>`;
                  });
                  $('.fetch_provinces').append(fetch_provinces)

               }

            } catch (err) {
               console.log(err);
            }
         }
      } else {
         $('.fetch_provinces').empty();
         $('.spinner_temparary_class').hide();
      }

   })


   var province_hidden_id = []
   $(document).on('click', '.select_box', function (e) {
      var id = $(this).attr('id');
      if ($('.id_' + id).hasClass('active')) {
         $('.id_' + id).removeClass('active')
         province_hidden_id.pop(parseInt(id))
      } else {
         $('.id_' + id).addClass('active')
         province_hidden_id.push(parseInt(id))
      }
   })

   $(document).on('click', '.municipalities_btn', function (e) {
      var fetch_airpots = '';
      if (province_hidden_id != "") {
         get_airpots().then(r => '');
         async function get_airpots() {
            try {
               const endpoint = 'get_airports';
               const request_type = 'post';
               const payload = JSON.stringify({
                  "province_id": province_hidden_id
               });
               const response = await request(request_type, payload, endpoint);
               var response_data = response['data'];
               if (response.status === 1) {
                  $('.get_airpots').empty();
                  response_data.forEach(function (data) {
                     // do something with `item`
                     fetch_airpots += `<div class="col-4">
              <p class="select-box airpot_box airpot_id_${data.id}" id="${data.id}">${data.name}</p>
            </div>`;
                  });
                  $('.get_airpots').append(fetch_airpots)
                  $('.municipalities_btn').text("Processing...")
                  $('.municipalities_btn').attr('disabled', true);
                  showmessage('success', 'Company update successfully', 'Success');
                  setTimeout(function () {
                     $('.municipalities_btn').text("Next one");
                     $(".municipalities_btn").attr("disabled", false);
                     go($('#airports'), $('.tablinks:contains("Airports")'), 'airports');

                  }, 3000);
               }
            } catch (err) {
               console.log(err);
            }
         }
      } else {
         showmessage('error', 'Select provinces', 'Error');
      }


   })

   
   $(document).ready(function(){
      var fetch_airpots = '';
  
     
         get_airpots().then(r => '');
         async function get_airpots() {
            try {
               const endpoint = 'get_airports';
               const request_type = 'post';
               const payload = JSON.stringify({
                  "province_id": [0],
                 
               });
               const response = await request(request_type, payload, endpoint);
               var response_data = response['data'];
               if (response.status === 1) {
                  $('.get_airpots').empty();
                  response_data.forEach(function (data) {
                     // do something with `item`
                     fetch_airpots += `<div class="col-4 view_airports airpot_id_${data.id}"  id="${data.id}">
              <p class="select-box airpot_box airpot_id_${data.id}" id="${data.id}">${data.name}</p>
            </div>`;
                  });
                  $('.get_airpots').append(fetch_airpots)
                  $('.municipalities_btn').text("Processing...")
                  $('.municipalities_btn').attr('disabled', true);
                  showmessage('success', 'Company update successfully', 'Success');
                  setTimeout(function () {
                     $('.municipalities_btn').text("Next one");
                     $(".municipalities_btn").attr("disabled", false);
                     go($('#airports'), $('.tablinks:contains("Airports")'), 'airports');

                  }, 3000);
               }
            } catch (err) {
               console.log(err);
            }
         
      } 


   })

   $(document).on('click', '.airpot_box', function (e) {
      var id = $(this).attr('id');
      if ($('.airpot_id_' + id).hasClass('active')) {
         $('.airpot_id_' + id).removeClass('active')
         airport.pop(parseInt(id))
      } else {
         $('.airpot_id_' + id).addClass('active')
         airport.push(parseInt(id))
      }
   })


   $(document).on('click', '.airports_btn', function (e) {
      if (airport != "") {
         $('.airports_btn').text("Processing...")
         $('.airports_btn').attr('disabled', true);
         showmessage('success', 'Company update successfully', 'Success');
         setTimeout(function () {
            $('.airports_btn').text("Next one");
            $(".airports_btn").attr("disabled", false);

            go($('#vehicle'), $('.tablinks:contains("Vehicle")'), 'vehicle');

         }, 3000);
      } else {
         showmessage('error', 'Select airpots', 'Error');
      }
   })

   $(document).on('click', '.vehicle_btn', function (e) {
      $('.addvehicleform').each(function () {
         var type = $(this).find('.vehicle_type').val();
         var year = $(this).find('.vehicle_year').val();
         var number = $(this).find('.vehicle_number_plate').val();

         var vehicle = {
            "vehicle_type": type,
            "vehicle_year": year,
            "vehicle_number_plate": number
         };
         vehicleArray.push(vehicle);
      });
      showmessage('success', 'Company update successfully', 'Success');
      setTimeout(function () {

         go($('#notifications'), $('.tablinks:contains("Notifications")'), 'notifications');

      }, 3000);

   })

   $(document).on('click', '.notifications_btn', function (e) {
      new_ride_app_notification = $('.app_notification').val();
      new_ride_email_notification = $('.email_notification').val();

      if ($(".app_notification").is(":checked")) {
         new_ride_app_notification = 1;
      } else {
         new_ride_app_notification = 0;
      }
      if ($(".email_notification").is(":checked")) {
         new_ride_email_notification = 1;
      } else {
         new_ride_email_notification = 0;
      }

      $('.notifications_btn').text("Processing...")
      $('.notifications_btn').attr('disabled', true);
      showmessage('success', 'Company update successfully', 'Success');
      setTimeout(function () {
         $('.notifications_btn').text("Next one");
         $(".notifications_btn").attr("disabled", false);
         go($('#payment'), $('.tablinks:contains("Payment details")'), 'payment');

      }, 3000);

   })

   $(document).on('click', '.transportation_btn', function (e) {
      airport_transportation = $('.airport_transportation').is(':checked') ? 1 : 0;
      a_to_b_transport = $('.a_to_b_transport').is(':checked') ? 1 : 0;
      speed = $('.speed').is(':checked') ? 1 : 0;
      station_wagon = $('.station_wagon').is(':checked') ? 1 : 0;
      bus = $('.bus').is(':checked') ? 1 : 0;
      luxury = $('.luxury').is(':checked') ? 1 : 0;
      electric = $('.electric').is(':checked') ? 1 : 0;
      nameplate = $('.nameplate').is(':checked') ? 1 : 0;
      baby_chair = $('.baby_chair').is(':checked') ? 1 : 0;
      high_chair = $('.high_chair').is(':checked') ? 1 : 0;
      tx_hallmark = $('.tx_hallmark').is(':checked') ? 1 : 0;

      $('.transportation_btn').text("Processing...")
      $('.transportation_btn').attr('disabled', true);
      showmessage('success', 'Company update successfully', 'Success');
      setTimeout(function () {
         $('.transportation_btn').text("Next one");
         $(".transportation_btn").attr("disabled", false);
         go($('#municipalities'), $('.tablinks:contains("Municipalities")'), 'municipalities');

      }, 3000);

   })

   $(document).on('click', '.notifications_btn', function (e) {
      var name_of_account_holder_attr = $('input.name_of_account_holder');
      name_of_account_holder = name_of_account_holder_attr.val();
      var name_of_account_holder_class = name_of_account_holder_attr.attr("class").split(" ")[1];

      var iban_attr = $('.iban');
      iban = iban_attr.val();
      var iban_class = iban_attr.attr("class").split(" ")[1];

      var vat_number_attr = $('.vat_number');
      vat_number = vat_number_attr.val();
      var vat_number_class = vat_number_attr.attr("class").split(" ")[1];


      if (name_of_account_holder == "") {
         validateRequired(name_of_account_holder_class, "");
      } else if (iban == "") {
         validateRequired(iban_class, name_of_account_holder_class);
      } else if (vat_number == "") {
         validateRequired(vat_number_class, iban_class);
      } else {

         $('.notifications_btn').text("Processing...")
         $('.notifications_btn').attr('disabled', true);
         showmessage('success', 'Company update successfully', 'Success');
         setTimeout(function () {
            $('.notifications_btn').text("Next one");
            $(".notifications_btn").attr("disabled", false);
            go($('#payment'), $('.tablinks:contains("Payment details")'), 'payment');

         }, 3000);

      }
   })


   $(document).on('submit', '.company_form', function (e) {
      e.preventDefault();
      var form = $('.login-form');
      var form_data = form.serialize();
      $('.complete_save').text("Processing...")
      $('.complete_save').attr('disabled', true);
      company_update(form_data).then(r => '');
      async function company_update(form_data) {
         try {
            const endpoint = 'update_company_details';
            const request_type = 'post';

            var province_hidden_id_convert = province_hidden_id.join(', '); // Joins array elements with comma and space
            var airport_convert = airport.join(', '); // Joins array elements with comma and space

            const payload = {
               'first_name': first_name,
               'last_name': last_name,
               "ride_available_emails": ride_available_emails,
               "confirmation_and_tips_charge_emails": confirmation_and_tips_charge_emails,
               "invoice_emails": invoice_emails,
               "number_for_customer": number_for_customer,
               "mobile_number_for_sms_number": mobile_number_for_sms_number,
               "company_name": company_name,
               "chamber_of_commerce_number": chamber_of_commerce_number,
               "passenger_transport_number": passenger_transport_number,
               "zip": zip,
               "city": city,
               "house_number": house_number,
               "house_number_adition": house_number_adition,
               "street": street,
               "postal_code": postal_code,
               "contact_first_name": contact_first_name,
               "contact_last_name": contact_last_name,
               "contact_function": contact_function,
               "contact_email": contact_email,
               "contact_phone_number": contact_phone_number,
               "bus": bus,
               "airport_transportation": airport_transportation,
               "tx_hallmark": tx_hallmark,
               "iban": iban,
               "a_to_b_transport": a_to_b_transport,
               "speed": speed,
               "airports": airport_convert,
               "high_chair": high_chair,
               "nameplate": nameplate,
               "luxury": luxury,
               "state": state,
               "new_ride_app_notification": new_ride_app_notification,
               "station_wagon": station_wagon,
               "name_of_account_holder": name_of_account_holder,
               "contact_last_name": contact_last_name,
               "new_ride_email_notification": new_ride_email_notification,
               "contact_function": contact_function,
               "contact_first_name": contact_first_name,
               "contact_phone_number": contact_phone_number,
               "municipilaties": province_hidden_id_convert,
               "baby_chair": baby_chair,
               "electric": electric,
               "contact_email": contact_email,
               "vat_number": vat_number
            };

            const payload_vehicle = JSON.stringify({
               vehicleArray
            });
            const endpoint_vehicle = 'add_edit_vehicles';
            const response = await request(request_type, payload, endpoint);

            // const response_vehicle = await request_vehicle(request_type, JSON.stringify({
            //    vehicleArray
            // }), endpoint_vehicle);
            if (response.status === 1) {
               // set 2 seconds dela
               showmessage('success', 'Success');
               setTimeout(function () {
                  setCookie("user_id", user_id, 30);
                  setCookie("institution_checker", 1, 30);
                  window.location.href = '/';
               }, 3000);
            } else {
               showmessage('error', 'Something went wrong', 'Error');
               $('.complete_save').text("Save")
               $('.complete_save').attr('disabled', false);
            }

         } catch (err) {
            console.log(err);
            $('.complete_save').text("Save")
            $('.complete_save').attr('disabled', false);
         }
      }

   })

   let counter = 0; // Initialize the counter variable
   $("#addvehicle").click(function (e) {
   
      $('.add_vehicle').append(`<div class="addvehicleform new_vehicle_${counter}">
           <div class="sec-title mb-0 d-flex align-items-center justify-content-between">
             <span class="sub-title">Vehicle</span>
             <div class="vehicle-sec-add py-2 delete"  id="${counter}">
               <span class="text-dark">Remove</span>
               <div class="vehicle-remove-btn"><i class="icon fa fa-times"></i></div> 
             </div>
           </div>
           <div class="my-2">
             <label class="text-dark">Vehicle Type</label>
             <select class="form-control vehicle_type">
               <option>Select Type</option>
               <option>Sedan</option>
               <option>Estate</option>
               <option>Bus</option>
               <option>Electric</option>
             </select>
           </div>
           <div class="row">
             <div class="col-6">
             <div class="my-2">
               <label class="text-dark">Vehicle Year</label>
               <input class="form-control vehicle_year" type="text" placeholder="Enter Vehicle Year" name="vehicle_year" required>
             </div>
             </div>
             <div class="col-6">
             <div class="my-2">
               <label class="text-dark">Vehicle NumberPlate</label>
               <input class="form-control vehicle_number_plate" type="text" placeholder="Enter Vehicle NumberPlate" name="numberplate" required>
             </div>
             </div>
           </div>
           <hr>
       </div>`)
      counter++; // Increment the counter value
   
   });
   
   $(document).on('click', '.delete', function (e) {
      var id = $(this).attr('id');
      $('.new_vehicle_' + id).remove();
   })   

}();