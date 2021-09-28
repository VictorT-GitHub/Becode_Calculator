
const allBtns = document.querySelectorAll('.button');
const appBtns = document.querySelectorAll('.appbtn');
const result = document.querySelector('#result');
const historyAside = document.querySelector('.history');
const historyBtn = document.querySelector('#history');

const parenthese1 = document.querySelector('#parenthese1');
const parenthese2 = document.querySelector('#parenthese2');


// --------------- TEXT FOR BUTTONS ----------------

// Text in .button are equal to #id of the btn
allBtns.forEach(btn => btn.innerHTML = btn.id);

// Text in 'equal' btn is "="
equal.innerHTML = "=";

// Text in 'parenthese' double-btn is "(" and ")"
parenthese1.innerHTML = "(";
parenthese2.innerHTML = ")";


// --------------- FUNCTIONS -----------------

// function donnée pour remplacer [eval()]
function computeResult(str){
    return Function('return ' + str)()
  }

// function pour equal(=) btn et enter btn : Utilise [computeResult()] + Ajoute condition + Ajoute historique
function viviRoiDesMaths() {
    // Condition fix probleme si input vide
    if (result.innerHTML === "") {
        result.innerHTML = "";
        }
        else {
        // history mechanique
        const newDiv = document.createElement('div');
        const newSpanCalc = document.createElement('span');
        const newSpanEqual = document.createElement('span');
        newSpanEqual.innerHTML = " = ";
        const newSpanResult = document.createElement('span');
        const newHR = document.createElement('hr');
        
        newSpanCalc.innerHTML = result.innerHTML;
        newSpanCalc.addEventListener('click', () => { // history-calc clickEvent
            result.innerHTML += newSpanCalc.innerHTML;
        })
        newSpanCalc.classList.add('spanHover'); // IDEE A AMELIORER
        
        // result mechanique
        result.innerHTML = computeResult(result.innerHTML); // RESULTAT [computeResult()] (calcul donc changement de innerText)
        //
        
        // SUITE history mechanique
        newSpanResult.innerHTML = result.innerHTML;
        newSpanResult.style.fontWeight = "800"
        newSpanResult.addEventListener('click', () => { // history-result clickEvent
            result.innerHTML += newSpanResult.innerHTML;
        })
        newSpanResult.classList.add('spanHover'); // IDEE A AMELIORER
    
        newDiv.appendChild(newSpanCalc);
        newDiv.appendChild(newSpanEqual);
        newDiv.appendChild(newSpanResult);
        newDiv.appendChild(newHR);
        historyAside.insertBefore(newDiv, historyAside.children[0]);
    }
}


// ---------------- CLICK EVENTS ---------------------

// buttons(.appbtn) écrivent leurs textes dans [result]
appBtns.forEach((btn) => {
    btn.addEventListener('click', () => result.innerHTML += btn.innerHTML);
});

// 'equal'(=) btn
equal.addEventListener('click', viviRoiDesMaths);

// 'enter' btn
enter.addEventListener('click', viviRoiDesMaths);

// 'clear'(c) btn
c.addEventListener('click', () => result.innerHTML = "");

// 'PI' btn
PI.addEventListener('click', () => result.innerHTML += Math.PI);

// 'history' btn
historyBtn.addEventListener('click', () => historyAside.classList.toggle('show'));


// ---------------- KEYPRESS EVENT ----------------------

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '9':
        case '8':
        case '7':
        case '6':
        case '5':
        case '4':
        case '3':
        case '2':
        case '1':
        case '0':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
            result.innerHTML += e.key;
            break;

        case 'e':
        case ' ':
        case '=':
            viviRoiDesMaths();
            break;

        case 'c':
            result.innerHTML = "";
            break;

        case 'p':
            result.innerHTML += Math.PI;
            break;

        case 'h':
            historyAside.classList.toggle('show');
            break;

        default:
            console.log(`Erreur: Touche ${e.key} non definie.`);
    }
})
