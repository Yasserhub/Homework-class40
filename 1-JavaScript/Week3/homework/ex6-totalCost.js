'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  melk:1.75,
  water:1.23,
  tea:2,
  chips:2.75,
  egges:3.80
};

function calculateTotalPrice(groceryObject) {
  // TODO replace this comment with your code
  let values = Object.values(groceryObject);
  let size = Object.keys(groceryObject).length;
  let amount =0;
  for (let i=0; i<size; i++)
    {
      amount=amount + values[i];
      
    }

    return "Total: " + amount.toFixed(2);
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log(calculateTotalPrice(cartForParty));
  // TODO replace this comment with your code
}

function test2() {
  console.log(calculateTotalPrice(cartForParty));
  // TODO replace this comment with your code
}

function test() {
  test1();
  test2();
}

test();
