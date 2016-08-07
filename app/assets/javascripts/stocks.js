var init_stock_lookup;

init_stock_lookup = function() {
  
  $('#stock-lookup-form')
  // Handle success response
  .on('ajax:success', function(event, data, status) {
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  })
  // Handle error response
  .on('ajax:error', function(event, data, status) {
    $('#stock-lookup-results').empty();
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
    init_stock_lookup();
  });
  
};

$(document).ready(function() {
  init_stock_lookup();
});