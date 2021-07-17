
// dá funcionalidade ao botao do header
function btnMenu(e,i) {
   // 'i' recebe 'this' para a animação no futuro
   const element = document.querySelector(e)

   if(!element.classList.contains("activeMenu") && i.classList.contains("btnMenu")){
      element.classList.add("activeMenu")
   }else{
      element.classList.remove("activeMenu")
   }
}


// Dá a funcionalidade de abrir os links
function socialMediaLink(e){
   for (let className of e.classList) {
      switch(className){
         case 'facebook': window.open('https://www.facebook.com/IELBAfonsoclaudio') 
         break;

         case 'instagram': window.open('http://www.instagram.com/ielb_afonsoclaudio') 
         break;

         case 'youtube': window.open('https://www.youtube.com/channel/UCmlsg2cZoArkB_p_iAdeC8Q') 
         break;
         
         default: 
         break;
      }
   }
}
// add scroll animation -----------------------------

// menu
function headerAnime(){
   var header = document.querySelector(".header")
   
   header.classList.toggle("stiky", window.scrollY > 0)
}

// show page item

function animeScroll(){
   const target = document.querySelectorAll("[data-anime]");
   const animationClass = "animate";
   const windowTop = window.pageYOffset;

   target.forEach(function(element){
      if((windowTop) > element.offsetTop + window.innerHeight * -4 / 4.5){
         element.classList.add(animationClass)
      }else{
         element.classList.remove(animationClass)
      }

   })

}

// Event Listeners
window.addEventListener("scroll", function() {
   headerAnime();
   animeScroll()
})
