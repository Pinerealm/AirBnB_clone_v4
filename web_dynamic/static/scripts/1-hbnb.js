// Using jquery, listen for changes on each INPUT checkbox tag
// If the checkbox is checked, store the Amenity ID in a variable
// If the checkbox is not checked, remove the Amenity ID from the variable
// Update the H4 tag inside the DIV Amenities with the list of amenities checked
// Execute script only when the DOM is fully loaded
$(document).ready(function () {
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
