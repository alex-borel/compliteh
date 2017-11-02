const button = document.querySelector('.meeting__btn');
const div = document.querySelectorAll('.list__item');

button.addEventListener('click', () => {
  div.forEach(item => item.classList.toggle('hide'))
});

