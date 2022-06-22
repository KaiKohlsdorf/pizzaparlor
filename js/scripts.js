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
    // this.toppings.forEach(function() {
    //   this.toppingsCost = 
      console.log(this.toppings.length)
    // })
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
      console.log(size)
      $('#size').append(size + "<br>");
    })
    // $(#toppings).show()
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val())
      console.log(toppings)
      $('#toppings').append(toppings + "<br>");
    })
    
    const userPizzaPie = new PizzaPie(size, toppings);
    console.log(userPizzaPie)

    userPizzaPie.clickedSize()
    console.log(userPizzaPie.clickedToppings())
    console.log(userPizzaPie)
    userPizzaPie.calcCost()
    $('#total').text(userPizzaPie.totalCost);
    $('#total').show();

  });
})












