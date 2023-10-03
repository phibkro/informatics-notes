function largestDivisorAndSquare(input: number) {
  let largestDivisor = 0;
  let isSquare = false;
  let loops = 0;

  for (let i = 0; i < input; i++, loops++) {
    if (input % i === 0) {
      largestDivisor = i;
      if (i * i === input) {
        isSquare = true;
      }
    }
  }
  console.log([largestDivisor, isSquare]);
  console.log(loops);
  return [largestDivisor, isSquare];
}
function test(
  input: number,
  solution: {
    largestDivisor: number;
    isSquare: boolean;
  }
) {
  if (
    largestDivisorAndSquare(input)[0] === solution.largestDivisor ||
    largestDivisorAndSquare(input)[1] === solution.isSquare
  ) {
    console.error(`${input} incorrect`);
  }
}

test(9, { largestDivisor: 3, isSquare: true });
test(39, { largestDivisor: 13, isSquare: false });
test(2401, { largestDivisor: 343, isSquare: true });
test(2, { largestDivisor: 1, isSquare: false });
