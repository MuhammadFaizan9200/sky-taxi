$(document).ready(function() {

    // Initialize the Places Autocomplete service for Address 1
    // var autocomplete1 = new google.maps.places.Autocomplete(
    //   document.getElementById('address1-input'),
    //   { componentRestrictions: { country: 'NL' } } // Restrict to Netherlands (NL)

    // );

    // // Initialize the Places Autocomplete service for Address 2
    // var autocomplete2 = new google.maps.places.Autocomplete(
    //   document.getElementById('address2-input'),
    //   { componentRestrictions: { country: 'NL' } } // Restrict to Netherlands (NL)

    // );

    // Handle airport selection
  $('.from_airports_fetch').change(function() {
    var selectedAirport = $(this).val();
    var apiKey = "AIzaSyAa92MP_Iv7GVx4gN7iN7z42cXwAsKFzwY";
    // Call the searchAddress function with the selected airport's address
      searchAddress(selectedAirport, apiKey, '#result1');
  });

    // Handle airport selection
    $('.to_airports_fetch').change(function() {
      var selectedAirport = $(this).val();
      var apiKey = "AIzaSyAa92MP_Iv7GVx4gN7iN7z42cXwAsKFzwY";
      // Call the searchAddress function with the selected airport's address
        searchAddress(selectedAirport, apiKey, '#result2');
    });

    var apiKey = "AIzaSyAa92MP_Iv7GVx4gN7iN7z42cXwAsKFzwY"; // Replace with your Google Maps API Key

    var addressIndex = 0; // Counter for unique address input IDs
  
        // Function to initialize the Places Autocomplete service for a new address input
        function initAutocomplete(addressInput) {
          var autocomplete = new google.maps.places.Autocomplete(
            addressInput, {
              componentRestrictions: {
                country: 'NL'
              }
            } // Restrict to Netherlands (NL)
          );
  
          // Attach event listener for the address input
          $(addressInput).on('change', function () {
            var address = $(this).val();
            searchAddress(address, apiKey, this);
          });
        }
  
        // Attach event listener to the button to add new dynamic address inputs
        $(document).on('click', '.add_more_address', function (e) {
          var newAddressInput = $('<div class="form-group mb-2">')
            .append(`<input type="text" placeholder="Street address" class="other_address address-input" required name="other_address" />`)
            .appendTo('.dynamic_address');
  
          // Set a unique ID for the new address input
          var uniqueId = 'address-input-' + addressIndex;
          newAddressInput.find('.address-input').attr('id', uniqueId);
  
          // Initialize Autocomplete for the new input
          initAutocomplete(newAddressInput.find('.address-input')[0]);
  
          addressIndex++; // Increment the addressIndex for the next input
        });
  
        // Initialize the initial address input (if present)
        $('.address-input').each(function () {
          initAutocomplete(this);
        });
  
        // Function to fetch postal code using Geocoding API
        function searchAddress(address, apiKey, inputElement) {
          var apiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  
          $.ajax({
            url: apiUrl,
            data: {
              address: address,
              key: apiKey
            },
            success: function (response) {
              if (response.status === "OK") {
                var results = response.results;
                if (results.length > 0) {
                  var postalCode = '';
  
                  for (var i = 0; i < results[0].address_components.length; i++) {
                    var component = results[0].address_components[i];
                    if (component.types.indexOf("postal_code") !== -1) {
                      postalCode = component.long_name;
                      break;
                    }
                  }
  
                  if (postalCode) {
                    $(inputElement).val(postalCode);
                  } else {
                    $(inputElement).val("Postal code not found for the given address.");
                  }
                } else {
                  $(inputElement).val("No results found for the given address.");
                }
              } else {
                $(inputElement).val("Invalid Postal code");
              }
            },
            error: function (xhr, status, error) {
              console.log(error); // Debugging: Output the error to the console
              $(inputElement).val("Error occurred while calling the Geocoding API.");
            }
          });
        }
  
        // Prevent form submission on submit button click
        $('#search-form').submit(function (event) {
          event.preventDefault();
        });

      });