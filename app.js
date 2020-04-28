
// const checkbox = document.querySelector('.custom_checkbox');
// const checkmark = document.querySelector('.fas.fa-check');

const checkbox = document.querySelectorAll('.custom_checkbox');
let checkmark = document.querySelectorAll('.fas.fa-check');

checkbox.forEach(check => {
  check.addEventListener('click', () => {
    check.firstElementChild.classList.toggle('active');

  })
})