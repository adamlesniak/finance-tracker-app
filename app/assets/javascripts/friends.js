var init_friend_lookup;

init_friend_lookup = function() {
  
  $('#friend-lookup-form')
  // Handle success response
  .on('ajax:success', function(event, data, status) {
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  })
  // Handle error response
  .on('ajax:error', function(event, data, status) {
    $('#friend-lookup-results').empty();
    $('#friend-lookup-errors').replaceWith('friend was not found.');
    init_friend_lookup();
    hide_spinner();
  })
  // Show loading messsage
  .on('ajax:before', function() {
   show_spinner();
  })
  // Hide loading messsage
  .on('ajax:after', function() {
   hide_spinner();
  });
  
};

$(document).ready(function() {
  init_friend_lookup();
});