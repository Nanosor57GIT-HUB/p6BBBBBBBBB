//Medias likes

  function likesInfos(totalLikes, dayPrice) {
 
    const likesbox = document.querySelector(".likesBox");
    likesbox.innerHTML = `
     <div class="boxLikes aria-label="Nombre de likes par jour">
        <div class="mediaLikesBox">
        <p class="numberLikesBox"aria="${totalLikes} likes au total">${totalLikes}</p>
        <i class="fas fa-heart heart-box"></i>
        </div>
         <div class="likeInfosMedia">
        <p class="price-like-box" aria-label=" Son tarif est de: ${dayPrice} Euros par jour" tabindex="0">${dayPrice} €/Jour</p>
        </div>
        </div>`;

    let totalBox = `${totalLikes}`;

    
    //increment likes
    const incrementButton = document.querySelectorAll(".infos-Likes-Icon1");
    const decrementButton = document.querySelectorAll(".infos-Likes-Icon2");
    const likesCards = document.querySelectorAll("#media-card-likes");
    const likesTotal = document.querySelector(".numberLikesBox");

    for (let i = 0; i < incrementButton.length; i++) {
      incrementButton[i].addEventListener("click", function (event) {
        
        let buttonClicked = event.target;

        let textLike = buttonClicked.parentElement.children[2];

        let textLikeValue = textLike.innerHTML;

        let newValue = parseInt(textLikeValue) + 1;

         likesTotal.innerHTML = ++totalBox;

        if ((textLike.innerHTML = newValue)) {
          incrementButton[i].style.display = "none";
          decrementButton[i].style.display = "block";
        }
      });
      
    }

    //Decrement likes
    for (let i = 0; i < decrementButton.length; i++) {
      decrementButton[i].addEventListener("click", function (event) {
        let buttonClicked = event.target;

        let textLike = buttonClicked.parentElement.children[2];

        let textLikeValue = textLike.innerHTML;

        let newValue = parseInt(textLikeValue) - 1;

         likesTotal.innerHTML = --totalBox;

        if ((textLike.innerHTML = newValue)) {
          decrementButton[i].style.display = "none";
          incrementButton[i].style.display = "block";
        } else {
          likesCards.innerHTML = 0;
        }
      });
    }
   
  }
  