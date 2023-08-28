"use strict";
var KTUserListDatatable = function () {

//////////////////////////////////////////////////////////////////
// We are using the  function forgot password click
//////////////////////////////////////////////////////////////////

$(document).on('submit','.forgot-password', function(e){
        e.preventDefault();
        var form = $('.forgot-password');
        var form_data =  form.serialize();
        $('.forgot_password_btn').text("Processing...")
        $('.forgot_password_btn').attr('disabled', true);

        app_forgot(form_data).then(r => '');

        async function app_forgot(form_data) {
          try {
            const endpoint = 'forgot_password';
            const request_type = 'post';
            const payload = form_data;
            const response = await request(request_type, payload, endpoint);
              if(response.status === 1){
                 // set 2 seconds dela
                 showmessage('success',response.developer_message,'Success');
                 $('.forgot_password_area').hide()
                 $('.forgot_verify_area').show()
                 $('.forgot_verify_email').val($('.forgot_email').val())
                }
                else {
                    $('.forgot_password_btn').text("Forgot Password");
                    $(".forgot_password_btn").attr("disabled", false);
                    showmessage('error',response.developer_message,'Error');
                }
          } catch(err) {
            console.log(err);
          }
        }
})

//////////////////////////////////////////////////////////////////
// We are using the  function forgot verify click
//////////////////////////////////////////////////////////////////

$(document).on('submit','.forgot-verify-form', function(e){
    e.preventDefault();
    var form = $('.forgot-verify-form');
    var form_data =  form.serialize();
    $('.forgot_verify').text("Processing...")
    $('.forgot_verify').attr('disabled', true);

    app_forgot(form_data).then(r => '');

    async function app_forgot(form_data) {
      try {
        const endpoint = 'forgot_verify';
        const request_type = 'post';
        const payload = form_data;
        const response = await request(request_type, payload, endpoint);
          if(response.status === 1){
             // set 2 seconds dela
             showmessage('success',response.developer_message,'Success');
             $('.forgot_verify_area').hide()
             $('.reset_password_area').show()
             $('.forgot_verify_email').val($('.forgot_email').val())
             $('.forgot_verification_code').val($('.verification_code').val())

            }
            else {
                $('.forgot_verify').text("Verify");
                $(".forgot_verify").attr("disabled", false);
                showmessage('error',response.developer_message,'Error');
            }
      } catch(err) {
        console.log(err);
      }
    }
})

//////////////////////////////////////////////////////////////////
// We are using the  function reset password
//////////////////////////////////////////////////////////////////

$(document).on('submit','.reset-form', function(e){
    e.preventDefault();
    var form = $('.forgot-verify-form');
    var form_data =  form.serialize();
    $('.reset_password').text("Processing...")
    $('.reset_password').attr('disabled', true);

    app_forgot(form_data).then(r => '');

    async function app_forgot(form_data) {
      try {
        const endpoint = 'reset_password';
        const request_type = 'post';
        const payload = form_data;
        const response = await request(request_type, payload, endpoint);
          if(response.status === 1){
             // set 2 seconds dela
             showmessage('success',response.developer_message,'Success');
             setCookie("access_token", response.access_token, 30);
              setCookie("session_user_id", response.data["id"], 30);
            }
            else {
                $('.reset_password').text("Reset Password");
                $(".reset_password").attr("disabled", false);
                showmessage('error',response.developer_message,'Error');
            }
      } catch(err) {
        console.log(err);
      }
    }
})
}();


//////////////////////////////////////////////////////////////////
// We are using the  function  to click show  popup  forgot password
//////////////////////////////////////////////////////////////////

$(document).on('click','.forgot_password', function(e){
    $('.login_area').hide();
    $('.dynamic_area').append(`<div class="forgot_password_area">
        <div class="sec-title mb-0 pb-3">
            <span class="sub-title">Forgot Password </span>
        </div>
            <form method="post"  class="forgot-password">
                <input name="email" required class="form-control mb-3 forgot_email" type="email" placeholder="abc@gmail.com" />
                <button type="submit" class="theme-btn btn-style-one mt-2 w-100 forgot_password_btn">
                    <span class="btn-title">Forgot Password</span>
                </button>
            </form>
    </div>
    <div class="forgot_verify_area" style="display: none;">
    <div class="sec-title mb-0 pb-3">
        <span class="sub-title">Forgot Verify </span>
    </div>
        <form method="post"  class="forgot-verify-form">
            <input name="verification_code" required class="form-control mb-3 verification_code" type="text" placeholder="12345" />
            <input type="hidden" class="forgot_verify_email" name="email">
            <button type="submit" class="theme-btn btn-style-one mt-2 w-100 forgot_verify">
                <span class="btn-title">Verify</span>
            </button>
        </form>
</div>
<div class="reset_password_area" style="display: none;">
    <div class="sec-title mb-0 pb-3">
        <span class="sub-title">Reset Password</span>
    </div>
        <form method="post"  class="reset-form">
            <input name="password" required class="form-control mb-3" type="text" placeholder="12345" />
            <input type="hidden" name="forgot_verify_email" name="email">
            <input type="hidden" name="verification_code" class="forgot_verification_code">
            <button class="theme-btn btn-style-one mt-2 w-100 reset_password">
                <span class="btn-title">Reset Password</span>
            </button>
        </form>
</div> `)

})

