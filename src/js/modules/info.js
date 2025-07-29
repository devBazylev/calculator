// import { debounce } from '../utils/util';

const initInfo = () => {
  const info = document.querySelector('.info');
  const toggler = info.querySelector('.info__toggler');

  if (!info) {
    return;
  }

  const toggleTheme = () => {
    info.classList.toggle('info--light');
  };

  const onToggler = () => {
    toggleTheme();
  };

  toggler.addEventListener('click', onToggler);
  // console.log(theme);
};

export { initInfo };
