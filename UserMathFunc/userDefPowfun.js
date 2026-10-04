let input = 2;
let weight = 53;

// 2 needs to be multiplied by itself 53 times.
function pow(base, expo) {
  let result = 1;
  for (i = 0; i < expo; i++) {
    result = result * base;
  }
  console.log(`result=${result}`);
}

pow(input, weight);
