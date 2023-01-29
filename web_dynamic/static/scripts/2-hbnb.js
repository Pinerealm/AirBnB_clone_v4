$(document).ready(function () {
    // Using jquery, listen for changes on each INPUT checkbox tag
    // If the checkbox is checked, store the Amenity ID in a variable
    // If the checkbox is not checked, remove the Amenity ID from the variable
    // Update the H4 tag inside the DIV Amenities with the list of amenities checked
    // Execute script only when the DOM is fully loaded
    const amenities = {};
    $('input[type=checkbox]').change(function () {
      if ($(this).is(':checked')) {
        amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenities[$(this).attr('data-id')];
      }
      $('.amenities h4').text(Object.values(amenities).join(', '));
    });
});

// Request API status on http://0.0.0.0:5001/api/v1/status/
// If the status is "OK", add the class 'available' to the DIV#api_status
// Otherwise, remove the class 'available' from the DIV#api_status
$( window ).on( "load", function() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
      if (status === 'success') {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      }
    }
    );
});
