const makeChange = (c) => {
  // your name here
	 let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  while (c >= 25) {
    quarters++;
    c -= 25;
  }

  // Calculate the number of dimes
  while (c >= 10) {
    dimes++;
    c -= 10;
  }

  // Calculate the number of nickels
  while (c >= 5) {
    nickels++;
    c -= 5;
  }

  // Calculate the remaining pennies
  pennies = c;

  // Return the object with the coin counts
  return {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies
  };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
