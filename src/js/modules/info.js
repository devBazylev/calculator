// import { debounce } from '../utils/util';

const initInfo = () => {
  const info = document.querySelector('.info');
  const toggler = info.querySelector('.info__toggler');
  const display = info.querySelector('.info__display');
  const keyboard = info.querySelector('.info__keyboard');
  const reset = keyboard.querySelector('.info__btn--reset');
  const swap = keyboard.querySelector('.info__btn--swap');
  const dot = keyboard.querySelector('.info__btn--dot');
  const result = keyboard.querySelector('.info__btn--result');
  const nums = keyboard.querySelectorAll('.info__btn--num');
  const actions = keyboard.querySelectorAll('.info__btn--action');

  let board = '';

  if (!info) {
    return;
  }

  const resetDisplay = () => {
    display.textContent = 0;
  };

  const toggleTheme = () => {
    info.classList.toggle('info--light');
  };

  const onToggler = () => {
    toggleTheme();
  };

  const onReset = () => {
    resetDisplay();
  };

  const onSwap = () => {

  };

  const onDot = () => {
    if (board.includes('.')) {
      return;
    }
    if (board === '') {
      board = '0.';
    } else {
      board += '.';
    }
    display.innerText = board;
  };

  const onResult = () => {
    display = +board;
  };

  const onNum = (evt) => {
    const num = evt.target.textContent;
    board = `${board}${num}`;
    display.innerText = board;
  };

  const onAction = (evt) => {
    const signs = ['-', '+', '/', '*', '%'];
    if (signs.some(sign => board.includes(sign))) {
      return;
    }
    const sign = evt.target.textContent;
    board = `${board}${sign}`;
    display.innerText = board;
  };

  toggler.addEventListener('click', onToggler);
  reset.addEventListener('click', onReset);
  swap.addEventListener('click', onSwap);
  dot.addEventListener('click', onDot);
  result.addEventListener('click', onResult);
  nums.forEach(num => num.addEventListener('click', onNum));
  actions.forEach(action => action.addEventListener('click', onAction));
};

export { initInfo };
