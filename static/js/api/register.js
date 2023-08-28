"use strict";
var KTUserListDatatable = function () {
let time_out_handler;
let alert_success = 'alert error';

$(document).on('submit','.register-form', function(e){
        e.preventDefault();
        var app_id = $('.session_app_id').val();
        var btn = $(this);
        var form = $('.register-form');
        var form_data =  form.serialize();
        var password = $('.password').val();
        var c_password = $('.c_password').val();
        if (password != c_password) {
            showmessage('error',"Passord must be same",'Error');
        } else {
        app_register(form_data).then(r => '');
        $('.submit_register').text("Processing..");
        $(".submit_register").attr("disabled", true);

        async function app_register(form_data) {
          try {
            const endpoint = 'app_register';
            const request_type = 'post';
            const payload = form_data;
            const response = await request(request_type, payload, endpoint);
              if(response.status === 1){
                   $('.submit_register').text("Register").removeClass('disabled');
                 // set 2 seconds dela
                 showmessage('success',response.developer_message,'Success');
                 localStorage.setItem('email', $('.register_email').val());
                    setTimeout(function() {
                   $('.submit_register').text("Register");
                   $(".submit_register").attr("disabled", false);
                   window.location.href = "/verify";
                }, 3000 );
                } else {
                    $('.submit_register').text("Register");
                    $(".submit_register").attr("disabled", false);
                    showmessage('error',response.developer_message,'Error');
                }
          } catch(err) {
            console.log(err);
          }
        }
    }
})
}();