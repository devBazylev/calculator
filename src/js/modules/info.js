// import { debounce } from '../utils/util';

const initInfo = () => {
  const info = document.querySelector('.info');
  if (!info) {
    return;
  }
  const xxx = info.querySelector('.info__block');
  console.log(xxx);
};

export { initInfo };
