let expression = "";

function addCalc(value) {
    if (expression === "Error") {
        expression = "";
    }
    expression += value;
    document.getElementById("display").value = expression;
}

function clearCalc() {
    expression = "";
    document.getElementById("display").value = "0";
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression || "0";
}

function oneCalc(value) {
    addCalc(value);
}

function calculate() {
    try {
        if (expression.trim() === "") {
            return;
        }

        expression = String(eval(expression));
        document.getElementById("display").value = expression;
    }catch{
        expression = "Error";
        document.getElementById("display").value = "Error";
    }
}

