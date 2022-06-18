//Business Logic

// function PizzaPie(toppings, size, cost) {
//   this.toppings = toppings;
//   this.size = size;
//   this.cost = cost;
// }

// PizzaPie.prototype.clickedToppings = function() {
//   this.cost = this.cost + (this.toppings.length * 1.5);
//   return this.cost;
// };

// PizzaPie.prototype.clickedSize = function() {
//   if (this.size === "personal") {
//     this.cost += 8;
//   } else if (this.size === "medium") {
//     this.cost += 13;
//   } else {
//     this.cost += 16;
//   }
//     return this.cost;
// };

// function PizzaPie(toppings, size) {
//   this.toppings = toppings;
//   this.size = size;
//   this.cost = x;
// }

// PizzaPie.prototype.clickedToppings = function() {
//   this.cost = this.cost + (this.toppings.length * 1.5);
//   return this.cost;
// };

// PizzaPie.prototype.clickedSize = function() {
//   if (this.size === "personal") {
//     this.cost += 8;
//   } else if (this.size === "medium") {
//     this.cost += 13;
//   } else {
//     this.cost += 16;
//   }
//     return this.cost;
// };

function PizzaPie(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.sizeCost = 0;
    this.toppingsCost = 0;
    this.totalCost = 0;
  }
  
 
  // PizzaPie.prototype.clickedToppings = function() {
  //   this.toppingsCost = this.cost + (this.toppings.length * 1);
  //   return this.toppingsCost;
  // };
  
  
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
    this.toppings.forEach(function() {
      toppingsCost += 2;
    })
    return toppingsCost;
  };

  PizzaPie.prototype.calcCost = function() {
    this.totalCost = this.sizeCost + this.toppingsCost;
    return this.totalCost;
  }

// User Interface Logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("input:checkbox[name=size]:checked").val();
    const toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    })
    // $("#output").text(pizzaPieCost);
    $("#total").show(this.totalCost);
    // $("#output").hide();

  })
})









// let pizzaPie = new PizzaPie();

// $(document).ready(function() {
//   $("#form-group").submit(function(event) {
//     event.preventDefault();
    
//     let toppingChecked = $("input:checkput[name=topping]:checked").map(function() {
//       return this.clickedToppings;
//       });
//     let sizeChecked = $("input:checkbox[name=size]:checked").val();
    
//     let chosenPizzaPie = new PizzaPie(toppingChecked, sizeChecked)
//     chosenPizzaPie.clickedSize();

//     $("#total").text(chosenPizzaPie.clickedSize());
//     $("#total").show();
//     // let pizzaPie = new PizzaPie();
//     // event.preventDefault();

//     })

    

   


  
    // $("#toppings").show();
    // $("input:checkbox[name=topping]:checked").each(function(){
    //   const topping = $(this).val();
    //   $('#toppings').append(topping + "<br>");
    // })
    // $("#size").show();
    // $("input:checkbox[name=size]:checked").each(function(){
    //   const size = $(this).val();
    //   $('#size').append(size + "<br>");
    // })

    const showPizzaPie = PizzaPie.cost;

    // $("#PizzaPie").show();
    // $("#total").show();


