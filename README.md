# Pizza Parlor

#### Pizza Parlor a website for a pizza company where a user can choose one or more individual toppings  and a size to order a pizza and see the final cost.

## Contributor: Kai Kohlsdorf

## Technologies Used

*HTML

*CSS

*Javascript

*jQuery

*Bootstrap

*Markdown

## TDD

Describe: PizzaPie()

Test: "It should return 0 if user does not pick anything and clicks the order button."
Code: PizzaPie( )
Expected Output: 0

Test: "It should return 1.50 if user picks one topping and clicks the order button."
Code: PizzaPie(1)
Expected Output: 1.50

Test: "It should return 4.50 if user picks three toppings and clicks the order button."
Code: PizzaPie(3)
Expected Output: 4.50

Test: "It should return 13 if user picks a medium pizza and no toppings and clicks the order button."
Code: PizzaPie(0, medium)
Expected Output: 13

Test: "It should return 16 if user picks a medium pizza and two toppings and clicks the order button."
Code:PizzaPie(2, medium)
Expected Output: 16

## Installation

*Clone this repository to your desktop.

*Navigate to the top level of the directory.

*Open Pizza-Parlor/index.html in your browser.

## Known Bugs: 

*Submit button does not bring up pizza order.
*Submit button does not calculate the price.

## License
[MIT][<a href=https://github.com/KaiKohlsdorf/pizzaparlor/blob/main/LICENSE>LICENSE</a>]

Copyright (c) _June 17, 2022_ _Kai Kohlsdorf_
