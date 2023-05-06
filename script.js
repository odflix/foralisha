const audioButton = document.querySelector('button');
const audioPlayer = document.querySelector('audio');
const estrofes = document.querySelectorAll('.estrofe');
const ground = document.querySelector('.ground');
const heads = document.querySelectorAll('.head');
const heart = document.querySelector('.heart');
const minihearts = document.querySelector('.minihearts');
const sky = document.querySelector('.sky');
const stars = document.querySelectorAll('.star');
const us = document.querySelector('.us');

audioButton.addEventListener('click', (e) => {
  audioPlayer.src = 'https://raw.githubusercontent.com/odflix/heart/main/audio.mp3';

  audioPlayer.load();
  audioPlayer.play();
  
  ground.classList.add('animate');
  heart.classList.add('animate');
  minihearts.classList.add('animate');
  sky.classList.add('animate');
  us.classList.add('animate');
  
  heads.forEach(head => {
    head.classList.add('animate');
  })

  estrofes.forEach(estrofe => {
    estrofe.classList.add('animate');
  });
  
  stars.forEach(li => {
    li.classList.add('animate');
  });
});