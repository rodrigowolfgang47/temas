var path = anime.path('.motion-path-demo path');
var star = document.querySelectorAll('.star')

star.forEach(function(el){
  el.style.top = Math.random() * 500 + "px";
  el.style.left = Math.random() * 1110 + "px";
})

anime({
  targets: '.astronauta',
  translateY: -70,
  translateX: -20,
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true,
  direction: 'alternate'
});

anime({
  targets: '.pedra-01',
  translateX: -600,
  translateY: 100,
  easing: 'linear',
  duration: 50000,
  loop: true,
  rotate: '-90deg',
  direction: 'alternate'
});

anime({
  targets: '.pedra-02',
  translateX: -600,
  translateY: -100,
  rotate: '1turn',
  easing: 'linear',
  duration: 35000,
  loop: true,
  direction: 'alternate'
});

anime({
  targets: '.pedra-03',
  translateX: -600,
  translateY: -200,
  rotate: '1turn',
  easing: 'linear',
  duration: 40000,
  loop: true,
  direction: 'alternate'
});

anime({
  targets: '.star',
  easing: 'linear',
  duration: 1000,
  scale: 4,
  loop: true,
  direction: 'alternate',
  delay: anime.stagger(100) // increase delay by 100ms for each elements.
});




