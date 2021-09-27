const allBtns = document.querySelectorAll('.button');
const appBtns = document.querySelectorAll('.appbtn');
const result = document.querySelector('#result');
const historyAside = document.querySelector('.history');
const history = document.querySelector('#history');

const parenthese1 = document.querySelector('#parenthese1');
const parenthese2 = document.querySelector('#parenthese2');

// -------- TEXT FOR BUTTONS --------
// Text in button are equal to #id of the btn
allBtns.forEach(btn => btn.innerHTML += btn.id);
// Text in 'equal' btn is "="
equal.innerHTML = "=";
// Text in 'parenthese' double-btn is "(" and ")"
parenthese1.textContent = "(";
parenthese2.innerHTML = ")";

// ------- FUNCTIONS -------
function computeResult(str){
    return Function('return ' + str)()
  }
  
// -------- EVENTS --------
appBtns.forEach((btn) => {
    btn.addEventListener('click', () => result.innerHTML += btn.innerHTML);
});

// 'equal'(=) btn
equal.addEventListener('click', () => {
    
    // history mechanique
    const newDiv = document.createElement('div');
    const newSpanCalc = document.createElement('span');
    const newSpanResult = document.createElement('span');
    const newHR = document.createElement('hr');
    
    newSpanCalc.innerHTML = result.innerHTML + " = ";

    // RESULTAT (calcul donc changement de innerText)
    result.innerHTML = computeResult(result.innerHTML);
    // 

    newSpanResult.innerHTML = "<strong>" + result.innerHTML + "</strong>";

    newDiv.appendChild(newSpanCalc);
    newDiv.appendChild(newSpanResult);
    newDiv.appendChild(newHR);
    historyAside.appendChild(newDiv);
});

// 'clear'(c) btn
c.addEventListener('click', () => result.innerHTML = "");

// 'history' btn
history.addEventListener('click', () => historyAside.classList.toggle('show'));

// 'PI' btn
PI.addEventListener('click', () => result.innerHTML += Math.PI);