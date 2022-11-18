
/*
Call two arms equally strong if the heaviest
weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are
equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities
find out if you two are equally strong.
*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  // (15, 10, 15, 9)
  if (yourLeft !== friendsLeft && yourLeft !== friendsRight) {
    return false;
  }
  if (yourRight !== friendsLeft && yourRight !== friendsRight) {
    return false;
  }
  return true;
}

solution(15, 10, 15, 9);
solution(15, 10, 15, 10);
solution(1, 10, 10, 0);
