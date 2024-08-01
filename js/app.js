// Elements
const calcBtns = document.querySelectorAll(".calc-btn");
const calcBtn = document.querySelector(".calc-result");
const result = document.querySelector(".result");
const display = document.querySelector(".display input");
const delBtn = document.querySelector(".del-btn");
const clearBtn = document.querySelector(".clear");

// Adding onClick event to all the numbers
calcBtns.forEach((el) => {
  el.addEventListener("click", () => {
    const value = el.getAttribute("data-value");
    if (value === "**") {
      display.value += "^";
    } else {
      display.value += value;
    }
  });
});

delBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

clearBtn.addEventListener("click", () => {
  display.value = "";
  result.textContent = "0";
});

calcBtn.addEventListener("click", () => {
  try {
    display.value = display.value.replace("^", "**");
    const finalResult = eval(display.value);
    if (finalResult === Infinity) {
      throw new Error("division by 0");
    }
    result.textContent = finalResult | 0;
    display.value = display.value.replace("**", "^");
  } catch (error) {
    if (error.message === "division by 0") {
      result.textContent = error;
    } else {
      result.textContent = error.toString().slice(0, 32);
    }
  }
});
