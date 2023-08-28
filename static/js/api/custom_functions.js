$(document).ready(function() {
    // Apply the input mask and validation
    $('.phone-input').inputmask({
      mask: '+31999999999',  // Replace '9' with any allowed digit placeholder
      greedy: false,  // Prevents the user from adding additional characters beyond the mask
      placeholder: ' ',  // Uses a space as a placeholder for optional digits
      clearMaskOnLostFocus: true  // Clears the mask when the input field loses focus
    });
  
    // Event listener for keyup
    $('.phone-input').on('keyup', function() {
      if ($(this).inputmask('isComplete')) {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
      } else {
        $(this).removeClass('valid');
        $(this).addClass('invalid');
      }
    });
  });
  