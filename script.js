const allBtns = document.querySelectorAll(".button");
const appBtns = document.querySelectorAll(".appbtn");
const result = document.querySelector("#result");
const historyAside = document.querySelector(".history");
const historyBtn = document.querySelector("#history");

const parenthese1 = document.querySelector("#parenthese1");
const parenthese2 = document.querySelector("#parenthese2");

// --------------- TEXT FOR BUTTONS ----------------

// Text in .button are equal to #id of the btn
allBtns.forEach((btn) => (btn.textContent = btn.id));

// Text in 'equal' btn is "="
equal.textContent = "=";

// Text in 'parenthese' double-btn is "(" and ")"
parenthese1.textContent = "(";
parenthese2.textContent = ")";

// --------------- FUNCTIONS -----------------

// function donnée pour remplacer [eval()]
function computeResult(str) {
  return Function("return " + str)();
}

// function pour equal-btn et enter-btn : Utilise [computeResult()] + Ajoute condition + Ajoute historique
function viviRoiDesMaths() {
  // Condition fix probleme si input vide
  if (result.textContent !== "") {
    // history mechanique
    const newDiv = document.createElement("div");
    const newSpanCalc = document.createElement("span");
    const newSpanEqual = document.createElement("span");
    newSpanEqual.textContent = " = ";
    const newSpanResult = document.createElement("span");
    const newHR = document.createElement("hr");

    newSpanCalc.textContent = result.textContent;
    newSpanCalc.addEventListener("click", () => {
      // history-calc clickEvent
      result.textContent += newSpanCalc.textContent;
    });
    newSpanCalc.classList.add("spanHover"); // IDEE A AMELIORER

    // result mechanique
    result.textContent = computeResult(result.textContent); // RESULTAT [computeResult()] (calcul donc changement de innerText)
    //

    // SUITE history mechanique
    newSpanResult.textContent = result.textContent;
    newSpanResult.style.fontWeight = "800";
    newSpanResult.addEventListener("click", () => {
      // history-result clickEvent
      result.textContent += newSpanResult.textContent;
    });
    newSpanResult.classList.add("spanHover"); // IDEE A AMELIORER

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
  btn.addEventListener("click", () => (result.textContent += btn.textContent));
});

// 'equal'(=) btn
equal.addEventListener("click", viviRoiDesMaths);

// 'enter' btn
enter.addEventListener("click", viviRoiDesMaths);

// 'clear'(c) btn
c.addEventListener("click", () => (result.textContent = ""));

// 'PI' btn
PI.addEventListener("click", () => (result.textContent += Math.PI));

// 'history' btn
historyBtn.addEventListener("click", () =>
  historyAside.classList.toggle("show")
);

// ---------------- KEYPRESS EVENT ----------------------

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "9":
    case "8":
    case "7":
    case "6":
    case "5":
    case "4":
    case "3":
    case "2":
    case "1":
    case "0":
    case ".":
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    case ")":
      result.textContent += e.key;
      break;

    case "Enter":
    case "e":
    case " ":
    case "=":
      e.preventDefault();
      viviRoiDesMaths();
      break;

    case "c":
      result.textContent = "";
      break;

    case "p":
      result.textContent += Math.PI;
      break;

    case "h":
      historyAside.classList.toggle("show");
      break;

    default:
      console.log(`Erreur: Touche ${e.key} non definie.`);
  }
});
