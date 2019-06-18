/* eslint-disable func-names */
// eslint-disable-next-line strict
(() => {
  setTimeout(() => {
    document.querySelector('.hero-headerContainer').classList.add('pulse');
  }, 500);

  setTimeout(() => {
    document.querySelector('.hero-iconContainer').classList.add('pulse');
    document.querySelector('.hero-iconContainer').classList.add('slower');
  }, 900);
})();
