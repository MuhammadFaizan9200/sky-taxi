//////////////////////////////////////////////////////////////////
// We are using the Cookiee function for auth token and user id
//////////////////////////////////////////////////////////////////

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let deocode_split = decodedCookie.split(";");
    for (let i = 0; i < deocode_split.length; i++) {
      let cookiee = deocode_split[i];
      while (cookiee.charAt(0) == " ") {
        cookiee = cookiee.substring(1);
      }
      if (cookiee.indexOf(name) == 0) {
        return cookiee.substring(name.length, cookiee.length);
      }
    }
    return "";
  }
  
  function setCookie(cname, cvalue, exdays) {
    const get_date = new Date();
    get_date.setTime(get_date.getTime() + exdays * 1000 * 36000);
    let expires = "expires=" + get_date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function go(tab,content, cityName) {
    // Show the current tab, and add an "active" class to the button that opened the tab
    $('.tab-pane.active').removeClass('active');
    $('.nav-link.active').removeClass('active');
    tab.addClass('active');
    tab.addClass('show');
    content.addClass('active');
    $('[data-bs-target="#'+cityName+'"]').addClass('active');
}

//////////////////////////////////////////////////////////////////
// Required validation function
//////////////////////////////////////////////////////////////////
function validateRequired (add_class_var, remove_class_var) {
  window.scrollTo(0, 0);
  if (remove_class_var != "") {
    $('.' +remove_class_var).removeClass('form_validation');
  }
  $('.' +add_class_var).addClass('form_validation');
}