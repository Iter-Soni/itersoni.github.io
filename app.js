const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

const servicesContainers = document.querySelectorAll('.services__container');

servicesContainers.forEach((container) => {
  const video = container.querySelector('video');

  container.addEventListener('mouseover', () => {
    video.play();
  });

  container.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0;
  });
});

