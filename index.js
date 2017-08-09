function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
  return function(multiplier) {
    return multiplierValue * multiplier
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(first, second) {
  return (first * second)
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
