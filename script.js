const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function appendFunction(func) {
  if (func === "sin") {
    result.value += "Math.sin(";
  } else if (func === "cos") {
    result.value += "Math.cos(";
  } else if (func === "tan") {
    result.value += "Math.tan(";
  } else if (func === "log") {
    result.value += "Math.log10(";
  } else if (func === "ln") {
    result.value += "Math.log(";
  }
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const answer = Function('"use strict"; return (' + result.value + ')')();

    if (!isFinite(answer)) {
      result.value = "오류";
      return;
    }

    result.value = Number(answer.toFixed(10));
  } catch (error) {
    result.value = "오류";
  }
}