// business logic
var size = {small:6, medium:8, large:12};
var topping ={pepperoni:2, sausage:2, ham:2, bacon:1, olive:1, onion:1, pineapple:2, spinach:1};

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

var userToppings = [];

function pizza(size) {
  this.size = size;
  this.topping= topping;
}

pizza.prototype.pizzaSizePrice = function() {
  if(this.size === "small") {
    var sizePrice = small;
  } else if(this.size ==="medium") {
    var sizePrice = medium;
  } else {
     var sizePrice = large;
   }
  console.log(sizePrice);

  return sizePrice;

}


// user logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    $("#pizzasize").hide();
    $("#pizzatopping").fadeIn();
    var inputtedSize = $("input:radio[name=pizza-size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppings = $(this).val();
      userToppings.push(toppings + " ");
    });
    var newPizza = new pizza(inputtedSize, userToppings);
    var newPizzaPrice = newPizza.pizzaSizePrice();

    console.log(userToppings);


    });

});
