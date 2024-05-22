// const message = document.querySelector('.message');
//     const slider = document.querySelector('.slider');
    const logo = document.querySelector('.content2');
        t1 = new TimelineMax();


//    t1.fromTo(message,2, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
//    .fromTo(message,2, {width: '100%'}, {width: '70%', ease: Power2.easeInOut})
//    .fromTo(slider,1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut})
  t1 .fromTo(logo,5,{ opacity: 0, x: 40}, {opacity:1, x: 0}, "-=0.5");

  const hamburger = document.querySelector('.navbar3');
  const dropdown = document.querySelector('.navbar2');
  const newd = document.querySelector('.cancel');

  hamburger.addEventListener('click', () => {
    console.log('jgdjgfusuie');
    dropdown.style.display = "block";
  });

  newd.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });

  