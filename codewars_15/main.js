/*
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year 1
+9 cat years for second year 2
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  // humanYearsCatYearsDogYears(1), [1,15,15]
  let catsAge = 15;
  let dogsAge = 15;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 2) {
      catsAge += 9;
      dogsAge += 9;
    }
    if (i >= 3) {
      catsAge += 4;
      dogsAge += 5;
    }
  }

  return [humanYears, catsAge, dogsAge];
};
humanYearsCatYearsDogYears(2);
