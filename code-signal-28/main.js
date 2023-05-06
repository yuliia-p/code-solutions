function solution(inputString) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map(x => String.fromCharCode(x).toLowerCase());

  const newStr = [];
  for (let i = 0; i < inputString.length; i++) {

    const index = alphabet.indexOf(inputString[i]);
    const newCr = alphabet[index + 1];
    newStr.push(newCr);
  }
  return newStr.toString();
}
