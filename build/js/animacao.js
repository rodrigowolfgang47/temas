var path = anime.path('.motion-path-demo path');
var star = document.querySelectorAll('.star')

star.forEach(function(el){
  el.style.top = Math.random() * 500 + "px";
  el.style.left = Math.random() * 1110 + "px";
})

anime({
  targets: '.bolinha',
  translateY: -100,
  translateX: -20,
  easing: 'linear',
  duration: 3000,
  loop: true,
  direction: 'alternate'
});

anime({
  targets: '.star',
  easing: 'linear',
  duration: 1000,
  scale: 3,
  loop: true,
  direction: 'alternate',
  delay: anime.stagger(100) // increase delay by 100ms for each elements.
});




