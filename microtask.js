function logA() { console.log('A') };
function logB() { console.log('B') };
function logC() { console.log('c') };
function logD() { console.log('D') };
function logE() { console.log('E') };
function logF() { console.log('F') };
function logG() { console.log('G') };
function logH() { console.log('H') };
function logI() { console.log('I') };
function logJ() { console.log('J') };

logA();
SetTimeout(logG, 0);
promise.resolve() //async call - solace ::
  .then(logC)
  .then(setTimeout(logH))
  .then(logD)
  .then(logE)
  .then(logF),
  setTimeout(logI);
  setTimeout(logJ);
  logB();