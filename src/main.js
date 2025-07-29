import './sass/style.scss';
import {initInfo} from './js/modules/info';

window.addEventListener('DOMContentLoaded', () => {
  const startHtml = '';
  const indexHtml = 'index.html';
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === startHtml || currentPage === indexHtml) {
    initInfo();
  }

  window.addEventListener('load', () => {

  });
});
