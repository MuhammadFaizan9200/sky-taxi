
$(document).on('click','.rides_popup', function(e){
  var reservation_id=$(this).attr('reservation_id');
  var bid_id=$(this).attr('bid_id');
  alert(reservation_id);
  alert(bid_id);
  
  $('.dynamic_area').html(`<div class="login_area">
        <form method="post"  class="returnride-form">         
         <label class="ps-2">Are you sure you want to cancel your ride?</label>  
          <input type="hidden"  value="${reservation_id}" name="reservation_id"  />
          <input type="hidden"  value="${bid_id}" name="bid_id"  />
          <div class="col">
            <button class="theme-btn btn-style-one mt-2 w-100 returnride_btn cancel-ride">
              <span class="btn-title">RETURN RIDE</span>
            </button>
          </div>
        </form>	
        </div>`)
  $('#loginmodal').modal('show');
})

$(document).on('click','.cancel-ride', function(e){
    e.preventDefault(); 
    alert("Hello");       
    var form = $('.returnride-form');
    var form_data =  form.serialize();
    $('.returnride_btn').text("Processing...")
    $('.returnride_btn').attr('disabled', true);
    
    
    return_ride(form_data).then(r => '');
  

    async function return_ride(form_data) {
      try {
        const endpoint = 'cancel_reservation';
        const request_type = 'post';
        const payload = form_data;
        
        const response = await request(request_type, payload, endpoint);
        console.log(response);
        if(response.status === 1){
            
             showmessage('success',response.developer_message,'Success');
                setTimeout(function() {
               $('.returnride_btn').text("Return Ride");
               $(".returnride_btn").attr("disabled", false);
                window.location.href = "/myrides/";
            }, 3000 );
            }
      
            else {
                $('.returnride_btn').text("Return Ride");
                $(".returnride_btn").attr("disabled", false);
                showmessage('error',response.developer_message,'Error');
            }
      } catch(err) {
        console.log(err);
      }
    }

})


