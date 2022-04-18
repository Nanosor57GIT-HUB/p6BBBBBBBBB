
const sliderContainer = document.querySelector(".slider-modal");
sliderContainer.innerHTML = `
 <div class="slider-container">
   <div class="arrow-left-container">
     <div class="arrow-left"></div>
   </div>

   <div class="slider-media-container"></div>
   
   <div class="arrow-right-container">
     <div class="arrow-right"></div>
   </div>
   <div class="close-lightbox">x</div>
 </div>`;


const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const closeBtn = document.querySelector(".close-lightbox");

const enableLightboxListeners = (portfolio) => {
  // Create an copy array of all media cards
  //je creer une copie tableau de tous les medias
  const mediaCardsList = Array.from(
    document.querySelectorAll(".media-card-img")
  );
  // Create an copy array of all slides elements
  //Je creer un tableaux de  tous les éléments pour le media slide
  const slides = Array.from(document.querySelectorAll(".slide"));

  // Create an array holding ids of all media for navigation purposes
//tableau contenant les identifiants de tous les médias à des fins de navigation
  const slidesIds = slides.map((slide) => parseInt(slide.dataset.id));

  // Add click event listener to each media card
  // Mettre une fonction forEach avec un eventlistener aux media
  mediaCardsList.forEach((mc) =>
    mc.addEventListener("click", (e) => {
      // display Lightbox
      sliderContainer.style.display = "block";
    console.log(e.target.parentElement);

      // Get current index of clicked media
      //Récupérer l'index du media cliquer
      const currIndex = slidesIds.indexOf(
        parseInt(e.target.parentElement.dataset.id)
      );
      console.log(currIndex); //ressort l'index du media clicked

      // Display selected media inside lightbox
      // Afficher le média sélectionné dans la lightbox
      showSlide(currIndex);

      // Add event listener to Display previous media
      //Ajouter un écouteur d'événement pour afficher le média précédent
      prevBtn.addEventListener("click", (e) => {
        showSlide(parseInt(e.target.dataset.prev));
        console.log(e.target.dataset.prev);
      });

      console.log(currIndex); // positionne le previous sur l'index clicked(desc order 10...1-0)

      // Add event listener to Display next media
      //Ajouter un écouteur d'événement pour afficher le média suivant

      nextBtn.addEventListener("click", (e) => {
        showSlide(parseInt(e.target.dataset.next));
        console.log(e.target.dataset.next);
      });
      // console.log(nextBtn); //positionne le next sur l'index clicked(asc order 1...9-0)

      window.addEventListener("keydown", checkKeyPress, false);
      function checkKeyPress(e, index) {
        if (e.keyCode == "37") {
          prevBtn.click();
          console.log(window);
        } else if (e.keyCode == "39") {
          nextBtn.click();
          console.log(window);
        }
      }
    })
  );
  /*/////////////////////////////////////////////////////////////*/
  //open lightbox at clic
  window.addEventListener("keydown", checkKeyPress, false);
  function checkKeyPress(e, index) {
    if (e.keyCode == "13") {
       console.log(slides[0]);
       console.log(slidesIds[0])
       const test = slidesIds[1]
     //  console.log(showSlide());

      sliderContainer.style.display = "block";
    }
        if (e.keyCode == "27") {
      sliderContainer.style.display = "none";
    } else {
      return
    }
  }
 //console.log(slidesIds[0]);
  //ouvrir le media à l'index 1


  // document.addEventListener("keydown",
  // function checkKeyPress(e) {

      

   

  //   console.log(e.target.parentElement);
    // Get current index of clicked media
    //Récupérer l'index du media cliquer
  
    

  
    // if (e.keyCode == "13") {

    //   let firstcard= document.getElementsByClassName

    //   document.onkeydown = (e) => {
    //     console.log(e.target);
    //   }
    // document.onclick = (e) => {
    //   // console.log(e.target);
    //   sliderContainer.style.display = "block";
    //   console.log(parseInt(e.target.parentElement.dataset.id));
    //   const currIndex = slidesIds.indexOf(
    //     parseInt(e.target.parentElement.dataset.id)
    //   );
//  sliderContainer.style.display = "block";
//       showSlide(0);
//     };
    
//     if (e.keyCode == "27") {
//       sliderContainer.style.display = "none";
//     } else {
//       return;
//     }
//   })
 //console.log(slidesIds[0]);
  //ouvrir le media à l'index 1
  /*//////////////////////////////////////////////////////////////*/

  const showSlide = (index) => {
    // Display relevant media based on index
    //Afficher les médias pertinents en fonction de l'index
    slides.forEach((slide) => {
      parseInt(slide.dataset.id) === slidesIds[index]
        ? (slide.style.display = "block")
        : (slide.style.display = "none");
    });

    // Set next dataset value for Btn "previous"
    //Définir la valeur de l'ensemble de données suivant pour Btn "précédent"
    index - 1 < 0
      ? // If we reach first media index, go to last media index
        //Si nous atteignons le premier index de média, aller au dernier index de média
        (prevBtn.dataset.prev = slidesIds.length - 1)
      : // Otherwise, simply go to previous index
        // Sinon, aller simplement à l'index précédent
        (prevBtn.dataset.prev = index - 1);

    // Set next dataset value for Btn "next"
    //Définir la valeur de l'ensemble de données suivant pour Btn "next"
    index + 1 > slidesIds.length - 1
      ? // If we reach last media index, go back to first media index
        //Si nous atteignons le dernier index des médias, revenons au premier index des médias
        (nextBtn.dataset.next = 0)
      : // Otherwise, simply go to next index
        //Sinon, passez simplement à l'index suivant
        (nextBtn.dataset.next = index + 1);
  };
};

closeBtn.addEventListener("click", () => {
  sliderContainer.style.display = "none";
});

 