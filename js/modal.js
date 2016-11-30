var square = function(a) {
  return a * a;
};

var sumOfSquares = (a, b) => {
  return square(a) + square(b);
}
var squareSumOfSquares = (a, b) => {
  return square(sumOfSquares(a, b));
}
console.log(squareSumOfSquares(113, 33));

var openModal = document.querySelector('.write-us-btn'),
    modal = document.querySelector('.modal-content'),
    closeModal = modal.querySelector('.close-btn');

openModal.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('modal-content-show');
});

closeModal.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.remove('modal-content-show');
});
