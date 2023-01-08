/*
Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.
*/
function hasSurvived(attackers, defenders) {
  let survivorsA = 0;
  let survivorsD = 0;
  let length;
  if (attackers.length > defenders.length) {
    length = attackers.length;
  } else {
    length = defenders.length;
  }
  for (let i = 0; i < length; i++) {
    if (attackers[i] > defenders[i] || defenders[i] === undefined) {
      survivorsA++;
    } else if (attackers[i] < defenders[i] || attackers[i] === undefined) {
      survivorsD++;
    }
  }
  if (survivorsA === survivorsD) {
    const sumA = attackers.reduce((a, b) => a + b, 0);
    const sumD = defenders.reduce((a, b) => a + b, 0);
    if (sumA > sumD) {
      return false;
    }
    return true;
  }
  return survivorsA < survivorsD;
}
hasSurvived([81, 2, 82, 55, 91, 99, 11, 5, 72, 33], [44, 33, 74, 100, 72, 14, 52, 41, 4, 43]);
hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]);
