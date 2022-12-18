/*
The BOPE is the squad of special forces of police that usually
handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of
magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have
to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

["PT92", 6] => 2 (6 streets 3 bullets each)
*/
function magNumber(info) {
  const totalBullets = (info[0] === 'PT92')
    ? 17
    : (info[0] === 'M4A1' || info[0] === 'M16A2')
        ? 30
        : (info[0] === 'PSG1')
            ? 5
            : 0;
  return Math.floor(totalBullets / info[1]);
}
magNumber(['PT92', 6]);
