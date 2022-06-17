//Business Logic

function PizzaPie(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

PizzaPie.prototype.clickedToppings = function() {
  this.cost = this.cost + (this.toppings.length * 1.5);
  return this.cost;
};

PizzaPie.prototype.clickedSize = function() {
  if (this.size === "personal") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 13;
  } else {
    this.cost += 16;
  }
    return this.cost;
};

// User Interface Logic

let pizzaPie = new PizzaPie();

$(document).ready(function() {
  $("form#new-pizzaPie").submit(function(event) {
    event.preventDefault();
    const inputtedTopping = $("input#new-topping").val();
    const inputtedSize = $("input#new-size").val();
    let newPizzaPie = new PizzaPie(inputtedTopping, inputtedSize);
  })
})