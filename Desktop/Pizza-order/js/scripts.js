// business logic
var userMeatToppings = [];
var userVeggieToppings = [];

function Pizza(size, meatTopping, veggieTopping, price) {
  this.size = size;
  this.meatTopping = meatTopping;
  this.veggieTopping = veggieTopping;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function() {
  if(this.size === "small") {
    var sizePrice = 8;

  } else if(this.size ==="medium") {
    var sizePrice = 10;

  } else {
     var sizePrice = 12;
  }
  this.price = sizePrice + (this.meatTopping.length * 2) + this.veggieTopping.length;
}


// user logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    $("#pizzasize").hide();
    $("#pizzatopping").fadeIn();
    var inputtedSize = $("input:radio[name=pizza-size]:checked").val();
    $("input:checkbox[name=topping-meat]:checked").each(function() {
      var meatToppings = $(this).val();
      userMeatToppings.push(meatToppings + " ");
    });
    $("input:checkbox[name=topping-veggie]:checked").each(function() {
      var veggieToppings = $(this).val();
      userVeggieToppings.push(veggieToppings + " ");
    });
    var newPizza = new Pizza(inputtedSize, userMeatToppings, userVeggieToppings);
    var newPizzaPrice = newPizza.pizzaPrice();
    $("#ordertotal").append("Your " + inputtedSize + " pizza will cost $" + newPizza.price + ", have a nice day, and thank you for your order!");
    });
});
