"use strict";
var KTUserListDatatable = function () {
let time_out_handler;
let alert_success = 'alert error';

$(document).on('submit','.verify-form', function(e){
        e.preventDefault();
        var form = $('.verify-form');
        var form_data =  form.serialize();
        $('.verify_btn').text("Processing...")
        $('.verify_btn').attr('disabled', true);
       
        app_verify(form_data).then(r => '');

        async function app_verify(form_data) {
          try {
            const endpoint = 'verify_user';
            const request_type = 'post';
            const payload = form_data;
            const response = await request(request_type, payload, endpoint);
              if(response.status === 1){
                 // set 2 seconds dela
                 var user_level = response.user_type
                 setCookie("access_token", response.access_token, 30);
                 setCookie("user_id", response.user_id, 30);
                 setCookie("user_level", response.user_type, 30);
                 setCookie("institution_checker", 0, 30);

                 showmessage('success',response.developer_message,'Success');
                    setTimeout(function() {
                   $('.verify_btn').text("Verify");
                   $(".verify_btn").attr("disabled", false);
                   if (user_level == 1) {
                    window.location.href = "/institutions";
                   }
                   else if (user_level == 2) {
                    window.location.href = "/login";
                   }
                   else {
                    window.location.href = "/";
                   }
                   
                }, 3000 );
                }
                else {
                    $('.verify_btn').text("Verify");
                    $(".verify_btn").attr("disabled", false);
                    showmessage('error',response.developer_message,'Error');
                }
          } catch(err) {
            console.log(err);
          }
        }
})
}();
