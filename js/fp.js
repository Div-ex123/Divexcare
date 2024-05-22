const hamburger = document.querySelector('.navbar3');
  const dropdown = document.querySelector('.navbar2');
  const newd = document.querySelector('.cancel');

  hamburger.addEventListener('click', () => {
    console.log('jgdjgfusuie')
    dropdown.style.display = "block";
  });

  newd.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });

const message = document.querySelector('.introbar');
    // const slider = document.querySelector('.slider');
    const logo = document.querySelector('.cover');
      const t1 = new TimelineMax();


    
    t1.fromTo(message,2, {width: '0%'}, {width: '100%', ease: Power2.easeInOut});

  t1 .fromTo(logo,5,{ opacity: 0, y: 0}, {opacity:1, y: 200}, "-=0.5");
            //  eventlistener
  

  const introbar = document.querySelector('.introbar'); 
  var image1 = document.getElementById('image1');
  var image2 = document.getElementById('image2');
  var image3 = document.getElementById('image3');
  var image4 = document.getElementById('image4');
  
  var images = [image1, image2, image3, image4];

  console.log(images[2]);

  var change = 0;
  setInterval(function interval(){
    change++;
    if(change > 3){
      change = 0;
    }
    console.log(change);
    introbar.style.backgroundImage = `url(${images[change].currentSrc})`;

    console.log(introbar.style)
    introbar.style.transitionDuration = "3s";
    console.log(introbar.style.backgroundImage);
  
  }, 5000);
  