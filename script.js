const allBtns = document.querySelectorAll('button');
const appBtns = document.querySelectorAll('.btn');
const result = document.querySelector('#result')

// Text in button are equal to #id of the btn
allBtns.forEach(btn => btn.innerHTML = btn.id);
// Text in "equal" btn is "="
equal.innerHTML = "=";

// ----- FUNCTIONS -----
function computeResult(str){
    return Function('return ' + str)()
  }
  
// ------ EVENTS ------
appBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        result.innerHTML += btn.id;
    });
});

equal.addEventListener('click', () => {
   result.innerHTML = computeResult(result.innerHTML);
});

c.addEventListener('click', () => result.innerHTML = "");