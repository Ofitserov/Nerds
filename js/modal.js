

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
