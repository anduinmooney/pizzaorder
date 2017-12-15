// business logic
var small = 6;
var medium = 8;
var large = 12;

var pepperoni = 2;
var sausage = 2;
var ham = 2;
var bacon = 1;

var olive = 1;
var onion = 1;
var pineapple = 2;
var spinach = 1;


// user logic
$(document).ready(function() {
  $("#pizzasize").submit(function(event) {
    event.preventDefault();
    $("#pizzasize").hide();
    $("#pizzatopping").fadeIn();
    });
  $("#pizzatopping").submit(function(event) {
    event.preventDefault();
    $("#pizzatopping").hide();
    $("#order").fadeIn();
  });
  $("#order").submit(function(event) {
    event.preventDefault();
    $("#order").hide();
    $("#ordertotal").fadeIn();
  });
});
