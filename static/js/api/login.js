"use strict";
var KTUserListDatatable = function () {
let time_out_handler;
let alert_success = 'alert error';

$(document).on('submit','.login-form', function(e){
        e.preventDefault();        
        var form = $('.login-form');
        var form_data =  form.serialize();
        $('.login_btn').text("Processing...")
        $('.login_btn').attr('disabled', true);
        var password = $('.password').val();
        var login_email = $('.login_email').val();
        var c_password = $('.c_password').val();
        if (password != c_password) {
            showmessage('error',"Password must be same",'Error');
        } else {
        app_login(form_data).then(r => '');
        $('.submit_register').text("Processing..");
        $(".submit_register").attr("disabled", true);

        async function app_login(form_data) {
          try {
            const endpoint = 'login';
            const request_type = 'post';
            const payload = form_data;
            
            const response = await request(request_type, payload, endpoint);
            if(response.status === 1){
                 // set 2 seconds dela
                //  var user_level = response.user_level;
                 var user_level = response.user_type;
                 var is_profile_updated = response.is_profile_updated;
                 setCookie("access_token", response.access_token, 30);
                 setCookie("user_id", response.user_id, 30);
                 setCookie("user_level", user_level, 30);
                 showmessage('success',response.developer_message,'Success');
                    setTimeout(function() {
                   $('.login_btn').text("Register");
                   $(".login_btn").attr("disabled", false);
                   var get_user_id = getCookie("user_id");
                   if(user_level == 1) {
                       window.location.href = "/institutions/";
                   } else {
                    if (user_level == 2) {
                      window.location.href = "/login";
                     }
                     else {
                      window.location.href = "/available-rides/";
                     }

                   }
                   localStorage.setItem('login_email_local_storage', login_email);
                    
                }, 3000 );
                }
                else if (response.status == -3) {
                  $('.login_area').hide();
                  $('.verify_area').show();
                  $('.verify_email').val($('.login_email').val())
                  $('.temp_verify_code').html(`Temporary verification code is `+ response.verification_token)

                  showmessage('error',response.developer_message,'Error');
                } 
                else {
                    $('.login_btn').text("Register");
                    $(".login_btn").attr("disabled", false);
                    showmessage('error',response.developer_message,'Error');
                }
          } catch(err) {
            console.log(err);
          }
        }
    }
})
}();


function login_popup_data() {

  $('.dynamic_area').html(`<div class="login_area">
      <div class="sec-title mb-0 pb-3">
        <span class="sub-title">Login </span>
      </div>
        <form method="post"  class="login-form">
        <input name="firebase_token" value ="Test"  class="form-control mb-3" type="hidden" />  
        <input name="email" required class="form-control mb-3 login_email" type="text" placeholder="mail@exmaple.com" />
          <input name="password" required class="form-control mb-3" type="password" placeholder="Password" />
            <div class="d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="ps-2">Remember me</label>
              </div>
              <a href="javascript:;" class="text-decoration-underline forgot_password">Forgot your password?</a>
            </div>
          <button class="theme-btn btn-style-one mt-2 w-100 login_btn">
            <span class="btn-title">Login</span>
          </button>
        </form>		
      <div class="text-center mt-2">
        <a href="/register" class="text-decoration-underline"> Don't have an account yet?</a>
      </div>
    </div>
    <div class="verify_area" style="display: none;">
    <div class="sec-title mb-0 pb-3">
      <span class="sub-title">Verify </span>
    </div>
      <div class="temp_verify_code"></div>
      <form method="post"  class="verify-form">
        <input name="verification_code" required class="form-control mb-3" type="text" placeholder="12345" />
        <input type="hidden" class="verify_email" name="email">			
        <button type="submit" class="theme-btn btn-style-one mt-2 w-100 verify_btn">
          <span class="btn-title">Verify</span>
        </button>
      </form>		
    </div>`)
    $('#loginmodal').modal('show');
}


function company_popup_data() {

  $('.dynamic_area').html(`<div class="login_area">
      <div class="sec-title mb-0 pb-3">
        <span class="sub-title">Company</span><br>
        <span>You are logged in with the company's account, and you cannot make reservations. You need to log in with a user account.</span>
      </div>

    </div>`)
    $('#loginmodal').modal('show');
}


$(document).on('click','.login_popup', function(e){
  login_popup_data();
})
