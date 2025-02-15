/** Exercise 01 - Coins **/
function calculateChange(money) {
  //confirm amount is within the correct bounds
  if (money > 100 || money < 0) {
    return { error: "Please enter an amount between $0 and $100." };
  }

  //convert money to cents in order to count coins
  let cents = money * 100;

  //define variables for each of our needed money values
  let dollars = 0;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  //use iterative lops to decrement the number of cents by each money values
  while (cents > 100) {
    cents -= 100;
    dollars += 1;
  }
  while (cents > 25) {
    cents -= 25;
    quarters += 1;
  }
  while (cents > 10) {
    cents -= 10;
    dimes += 1;
  }
  while (cents > 5) {
    cents -= 5;
    nickels += 1;
  }
  while (cents >= 1) {
    cents -= 1;
    pennies += 1;
  }

  //define a list for our result
  let change_needed = [];

  //helper function to add coins by name and number of specific coin
  //add a special check for dealing with penny/pennies as well as each coin plural
  function addCoin(count, name) {
    if (count > 0) {
      let coinName =
        name === "penny" && count > 1
          ? "pennies"
          : name + (count > 1 ? "s" : "");
      change_needed.push(`${count} ${coinName}`);
    }
  }

  //add each coin to result using the helper function
  addCoin(dollars, "dollar");
  addCoin(quarters, "quarter");
  addCoin(dimes, "dime");
  addCoin(nickels, "nickel");
  addCoin(pennies, "penny");

  //return the result with each coin seperated by a comma
  return change_needed.join(", ");
}

// Add your function here

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large
console.log(calculateChange(-4));
// Add additional test cases here
console.log(calculateChange(0.01));
console.log(calculateChange(1.41));
