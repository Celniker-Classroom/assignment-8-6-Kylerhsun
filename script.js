// ----- Functions to implement -----


// 1) myFunc(): persistent counter
let myFunc = (function() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}) ();
// 2) getRandomNum(max): 1..max int or 0 if invalid
let getRandomNum = (function(max)
{
  let random = Math.floor(Math.random()*max)+1;
  if (max<1 ||random < 1) {
    return 0;
  }
else {
  return random;
}
})
// 3) myAdder(x, y): numeric sum
let myAdder =(function(x,y) {
  x = Number(x);
  y = Number(y);
  return x+y;
})
// 4) distance(x1, y1, x2, y2): Euclidean distance
let distance = (function (x1, y1, x2, y2) {
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);
  let Euclidean = Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
  return Euclidean;
})
// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
let quadratic = (function(a,b,c) {
  a = Number(a)
  b = Number(b)
  c = Number(c)
  let discriminant = b*b - 4*a*c;
  if (discriminant > 0){
    let answer1 = (-b+Math.sqrt(discriminant))/(2*a);
    let answer2 = (-b-Math.sqrt(discriminant))/(2*a);
    return [answer1, answer2]
  }
  else if (discriminant === 0) {
    let answer = -b/(2*a);
    return answer;
  }
  else {
    let realPart = -b/(2*a);
    let imaginaryPart = Math.sqrt(-discriminant)/(2*a);
    return [realPart + "+" + imaginaryPart + "i", realPart + "-" + imaginaryPart + "i"];
  }
})




// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
