// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop,
// and continues execution of the loop with the next iteration.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Fav number');
    continue;
  }
  console.log(`Number is ${i}`);
};
