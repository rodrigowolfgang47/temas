var path = anime.path('.motion-path-demo path');

anime({
  targets: '.bolinha',
  translateY: -100,
  translateX: -20,
  easing: 'linear',
  duration: 3000,
  scale: 1.5,
  loop: true,
  direction: 'alternate'
});

