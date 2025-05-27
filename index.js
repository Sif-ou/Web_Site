
let white_theme = document.getElementById( 'theme_button_w' ) ;
let black_theme = document.getElementById( 'theme_button_b' ) ;
let web = document.getElementById( 'color-c') ;
let body_theme = document.g

white_theme.addEventListener("click", function() {


   white_theme.style.visibility = "hidden" ;
   black_theme.style.visibility = "visible" ;
   document.body.style.backgroundColor = "#FBFAF5"
   document.body.style.color = "#222023"
   web.style.backgroundColor = "#FBFAF5" ;
   web.style.color = "#222023"

});


black_theme.addEventListener("click", function() {

   white_theme.style.visibility = "visible" ;
   black_theme.style.visibility = "hidden" ;
   document.body.style.backgroundColor = "#222023"
   document.body.style.color = "#FBFAF5" 
   web.style.backgroundColor = "#222023" ;
   web.style.color = "#FBFAF5"

});




let video = document.getElementById ('V1') ;
let button = document.getElementById('home-video-button') ;
let video_state = true ;

button.addEventListener( "click" , function(){

   if ( video_state == true )
    {
       video_state = false ;
       video.pause();
       button.src = "assets/play_.png" ;
    }
   else 
    {
       video_state = true ;
       video.play() ;
       button.src = "assets/pause_.png" ;
    }

}) ;



let D1 = document.getElementById('D1V');
let detail_D1 = document.getElementById('D1content') ;

D1.addEventListener( "mouseover" , function() {
   D1.play() ;
});

D1.addEventListener("mouseout", function () {
    D1.pause();
});

 


const observer = new IntersectionObserver( (ent) => {

   ent.forEach( (er) => {

      if ( er.isIntersecting ){
         er.target.classList.add('show');
      }
   })

});

const hidden_elem = document.querySelectorAll('.hidden');
hidden_elem.forEach((e1) => observer.observe(e1) ) ;




const ani = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('change-text-ani');
      observer.unobserve(entry.target); // Only animate once
    }
  });
});

const box = document.querySelector('.change-text');
ani.observe(box);