function appendValue(value) {
  document.getElementsByName("display")[0].value += value;
}

function clearDisplay() {
  document.getElementsByName("display")[0].value = "";
}

function delChar() {
  let currentDisplay = document.getElementsByName("display")[0].value;
  document.getElementsByName("display")[0].value = currentDisplay.slice(0, -1);
}

function calculate() {
  let expression = document.getElementsByName("display")[0].value;
  try {
    document.getElementsByName("display")[0].value = eval(expression);
  } catch (e) {
    document.getElementsByName("display")[0].value = "Error";
  }
}
// https://azure-kellia-76.tiiny.site
