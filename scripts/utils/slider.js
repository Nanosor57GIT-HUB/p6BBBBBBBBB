
const sliderContainer = document
  .querySelector(".slider-modal")
sliderContainer.innerHTML = `
 <div class="slider-container" >
   <div class="arrow-left-container">
     <div class="arrow-left" aria-label=" Voir l'image précédente"  tabindex="0"></div>
   </div>

   <div class="slider-media-container"></div>
   
   <div class="arrow-right-container" >
     <div class="arrow-right" aria-label=" Voir l'image suivante" tabindex="0"></div>
     <div class="closeContainer">
     <div class="close-lightbox" aria-label=" Cliquer pour fermer" tabindex="0">X</div>
     </div>
   </div>
   
 </div>`;
//https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles

const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const closeBtn = document.querySelector(".close-lightbox");


//enableLightboxListeners
const enableLightboxListeners = (portfolio) => {
  const mediaCardsList = Array.from(
    document.querySelectorAll(".media-card-img")
  );

  //Création d'un tableaux de tous les éléments pour le media slide
  const slides = Array.from(document.querySelectorAll(".slide"));
 // console.log(slides);
  //tableau contenant les identifiants de tous les médias à des fins de navigation
  const slidesIds = slides.map((slide) => parseInt(slide.dataset.id));
 // console.log(slidesIds);

  // Fonction forEach avec un eventlistener aux media
  mediaCardsList.forEach(
    (mc) =>
      mc.addEventListener("click", (e) => {
        const currIndex = slidesIds.indexOf(
          parseInt(e.target.parentElement.dataset.id)
        );

        //récupération de currindex à l'ouverture du media en focus
        showSlide(currIndex);

        //  const controlsVideo = document.getElementById("ctrls");
        //         controlsVideo.setAttribute("controls", "");
        //          console.log(controlsVideo);

        // display Lightbox
        sliderContainer.style.display = "block";
     
        //Ajout d'un écouteur d'événement pour afficher le média précédent
        prevBtn.addEventListener("click", (e) => {
          showSlide(parseInt(e.target.dataset.prev));
          console.log(e.target.dataset.prev);
        });

        //Ajout d'un écouteur d'événement pour afficher le média précédent
        nextBtn.addEventListener("click", (e) => {
          showSlide(parseInt(e.target.dataset.next));
    //      console.log(e.target.dataset.next);
        });
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "Enter") {
        sliderContainer.style.display = "block";
        nextBtn.focus();
      }
      if (e.key == "Escape") {
        sliderContainer.style.display = "none";
      }
    },
    false
  );
        //addevent enter/escape
      }) //End mc.addEventListener
  ); //end mediaCardlist forEach

  //Ajout d'un écouteur d'événement pour le clavier
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "ArrowLeft") {
        prevBtn.click();
        //console.log(window);
      } else if (e.key == "ArrowRight") {
        nextBtn.click();
        // console.log(window);
      }
    },
    false
  );
  

  //showSlide
  const showSlide = (index) => {
    //Afficher les médias pertinents en fonction de l'index
    slides.forEach((slide) => {
      parseInt(slide.dataset.id) === slidesIds[index]
        ? (slide.style.display = "block")
        : (slide.style.display = "none");
    });

    //Définir la valeur de l'ensemble de données suivant pour Btn "précédent"
    index - 1 < 0
      ? //Si nous atteignons le premier index de média, aller au dernier index de média
        (prevBtn.dataset.prev = slidesIds.length - 1)
      : // Sinon, aller simplement à l'index précédent
        (prevBtn.dataset.prev = index - 1);

    //Définir la valeur de l'ensemble de données suivant pour Btn "next"
    index + 1 > slidesIds.length - 1
      ? //Si nous atteignons le dernier index des médias, revenons au premier index des médias
        (nextBtn.dataset.next = 0)
      : //Sinon, passez simplement à l'index suivant
        (nextBtn.dataset.next = index + 1);
  }; //end showSlide
}; //end enableLightboxListeners

//Fermeture du slider
closeBtn.addEventListener("click", () => {
//    const zz = document.getElementById("ctrls")
//  zz.removeAttribute("controls", "");
//  console.log(zz);
  sliderContainer.style.display = "none";
 
});

 