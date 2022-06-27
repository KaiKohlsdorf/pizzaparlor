//Business Logic

function PizzaPie(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.sizeCost = 0;
    this.toppingsCost = 0;
    this.totalCost = 0;
  }
  
  PizzaPie.prototype.clickedSize = function() {
    if (this.size === "personal") {
      this.sizeCost = 8;
    } else if (this.size === "medium") {
      this.sizeCost = 13;
    } else if (this.size === "large") {
      this.sizeCost = 16;
    }
    return this.sizeCost;
  };
  
  PizzaPie.prototype.clickedToppings = function() {
    this.toppingsCost = this.toppings.length * 1.5 
    return this.toppingsCost;
  };

  PizzaPie.prototype.calcCost = function() {
    this.totalCost = this.sizeCost + this.toppingsCost;
    return this.totalCost;
  }

// User Interface Logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    let size
    let toppings = []
    $("input:checkbox[name=size]:checked").each(function() {
      size = $(this).val();
      $('#size').append(size + "<br>");
    })

    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val())
      $('#toppings').append(toppings + "<br>");
    })
    
    const userPizzaPie = new PizzaPie(size, toppings);
    userPizzaPie.clickedSize()
    console.log(userPizzaPie.clickedToppings())
    userPizzaPie.calcCost()
    $('#total').text(userPizzaPie.totalCost);
    $('#total').show();
  });
})












