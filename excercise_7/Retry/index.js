// RETRY
class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(num1, num2) {
  if(Math.random() < 0.2) return num1 * num2;
  else throw new MultiplicatorUnitFailure('Too bad');
}


function testMultiply(num1, num2){
  for(;;){
    try {
      return primitiveMultiply(num1, num2);
    } catch (error) {
      console.log(error instanceof MultiplicatorUnitFailure)
      if(!(error instanceof MultiplicatorUnitFailure))
        throw error;
        console.log(error);
    }
  }
}

console.log(testMultiply(2, 3));