;(function(){

  var slides = document.getElementsByName('slider'),
      slider = document.querySelector('.slider');

  function currentSlide() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].checked) {
        var currentSlide = slides[i];
      }
    }
    return currentSlide;
  }

  function nextSlide() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].checked) {
        var nextSlide = i+1 >= slides.length ? slides[0] : slides[i+1];
      }
    }
    return nextSlide;
  }

  function rotate(currentSlide, nextSlide) {
    currentSlide.removeAttribute('checked');
    nextSlide.checked = true;
  }

  function startRotate() {
    return intervalID = setInterval(function(){
      rotate(currentSlide(), nextSlide())
    }, 2000);
  }
  function stopRotate() {
    clearInterval(intervalID);
  }


    document.addEventListener('DOMContentLoaded', function(){
      startRotate();
    });

    slider.addEventListener('mouseover', function(event){
    event.preventDefault;
    stopRotate();
  });
    slider.addEventListener('mouseout', function(event){
    event.preventDefault;
    startRotate();
  });
})();
