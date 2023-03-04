function valdateFibonacci_1(numb) {
  let sequence = [0, 1];

  while (sequence[sequence.length - 1] < numb) {
    let next_fib = sequence.slice(-2).reduce((a, b) => a + b);
    sequence.push(next_fib);
  }
  
  const result =
    sequence.includes(numb) === true
      ? { data: `${numb} pertence a sequência fibonacci` }
      : { data: `${numb} Não pertence a sequência fibonacci` };
  return result;
}

const valdateFibonacci_2 = (numb) => {
  let fib1 = 0,
    fib2 = 1,
    fib3 = 0;
  while (numb > fib3) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  const result =
    numb === 0 || numb === fib3
      ? { data: `${numb} pertence a sequência fibonacci` }
      : { data: `${numb} Não pertence a sequência fibonacci` };
  return result;
};

console.log(valdateFibonacci_1(21));
console.log(valdateFibonacci_2(4));
