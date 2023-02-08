const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('mouseover', function() {
    anime({
      targets: this,
      scale: [2, 3, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  });
});