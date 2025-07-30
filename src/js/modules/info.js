const initInfo = () => {
  const info = document.querySelector('.info');
  const display = info.querySelector('.info__display');
  const toggler = info.querySelector('.info__toggler');
  const keyboard = info.querySelector('.info__keyboard');
  const reset = keyboard.querySelector('.info__btn--reset');
  const swap = keyboard.querySelector('.info__btn--swap');
  const percent = keyboard.querySelector('.info__btn--percent');
  const dot = keyboard.querySelector('.info__btn--dot');
  const result = keyboard.querySelector('.info__btn--result');
  const nums = keyboard.querySelectorAll('.info__btn--num');
  const actions = keyboard.querySelectorAll('.info__btn--action');

  let currentValue = '0';
  let previousValue = null;
  let operation = null;
  let shouldResetDisplay = false;

  if (!info) {
    return;
  }

  const toggleTheme = () => {
    info.classList.toggle('info--light');
  };

  const onToggler = () => {
    toggleTheme();
  };

  const updateDisplay = () => {
    display.textContent = currentValue;

    if (currentValue.length > 20) {
      currentValue = currentValue.slice(0, 20);
      display.textContent = currentValue;
    }

    adjustFontSize();
  };

  const adjustFontSize = () => {
    const baseFontSize = 70;
    const minFontSize = 25;

    const length = currentValue.length;

    if (length <= 6) {
      display.style.fontSize = `${baseFontSize}px`;
    } else if (length <= 8) {
      display.style.fontSize = `${baseFontSize - 10}px`;
    } else if (length <= 10) {
      display.style.fontSize = `${baseFontSize - 20}px`;
    } else if (length <= 12) {
      display.style.fontSize = `${baseFontSize - 30}px`;
    } else {
      display.style.fontSize = `${minFontSize}px`;
    }
  };

  const resetCalculator = () => {
    currentValue = '0';
    previousValue = null;
    operation = null;
    shouldResetDisplay = false;
    display.style.fontSize = '70px';
    updateDisplay();
  };

  const onReset = () => {
    resetCalculator();
  };

  const onSwap = () => {
    if (currentValue !== '0') {
      currentValue = currentValue.startsWith('-')
        ? currentValue.slice(1)
        : `-${currentValue}`;
      updateDisplay();
    }
  };

  const onPercent = () => {
    const num = parseFloat(currentValue);
    currentValue = (num / 100).toString();
    updateDisplay();
  };

  const onDot = () => {
    if (shouldResetDisplay) {
      currentValue = '0.';
      shouldResetDisplay = false;
    } else if (!currentValue.includes('.')) {
      currentValue += '.';
    }

    updateDisplay();
  };

  const onNum = (evt) => {
    const num = evt.target.textContent;

    if (shouldResetDisplay) {
      currentValue = num;
      shouldResetDisplay = false;
    } else {
      currentValue = currentValue === '0' ? num : currentValue + num;
    }

    updateDisplay();
  };

  const onAction = (evt) => {
    const sign = evt.target.textContent;

    if (operation && !shouldResetDisplay) {
      calculate();
    }

    previousValue = currentValue;
    operation = sign;
    shouldResetDisplay = true;
  };

  const calculate = () => {
    if (!operation || !previousValue) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    currentValue = result.toString();
    operation = null;
    previousValue = null;
    updateDisplay();
  };

  const onResult = () => {
    if (operation && !shouldResetDisplay) {
      calculate();
      shouldResetDisplay = true;
    }
  };

  toggler.addEventListener('click', onToggler);
  reset.addEventListener('click', onReset);
  swap.addEventListener('click', onSwap);
  percent.addEventListener('click', onPercent);
  result.addEventListener('click', onResult);
  dot.addEventListener('click', onDot);
  nums.forEach(num => num.addEventListener('click', onNum));
  actions.forEach(action => action.addEventListener('click', onAction));
};

export { initInfo };
