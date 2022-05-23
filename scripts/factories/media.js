//Factory support médias
class VideoMediaSubFactory {
  static render(video, title, type) {
    return `
    <video controls preload="metadata" id="ctrls" class="media-${type}-img lb-target" aria-label="intitulé du média ${title}">
                <source  src="assets/videos/${video}" type="video/mp4" >
                <track 
			kind="captions"
			label="FR" 
      src="assets/vtt/exple.vtt"
      srclang="fr"
			/>
       <P>Votre navigateur ne prend pas en charge HTML5. Peut-être devriez-vous mettre à niveau.</p>
              </video>       
         `;
  }
}

class ImageMediaSubFactory {
  static render(image, title, type, name) {
    return `   
     <img class="media-${type}-img lb-target" src="assets/Photos/${name}/${image}" alt="intitulé du média : ${title}"/> `;      
       
  }
}
//Déstructuration des medias
function mediaFactory(data, photographer) {
  const { id, date, image, likes, title, video } = data;
  const { name } = photographer;

  //mediaCard DOM
  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="media-card" data-id="${id}" data-title="${title}" data-date="${date}" tabindex="0">
   
      
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "card", name) 
          : VideoMediaSubFactory.render(video, title, "card", name)  
      }
      <div class="media-card-text">
          <span class="media-card-title">${title}</span>
          <div class="likesByMedia">
          <i class="fas fa-heart  infos-Likes-Icon2" ></i>
          <i class="far fa-heart  infos-Likes-Icon1" aria-label="Cliquer pour liker"></i>    
           <p class="media-card-likes" aria-label="Ce média a ${likes} likes" >${likes}</p>  
          </div>
        </div>

      </div>
`;

    return article;
  }

  //lightbox DOM
  function getMediaSlidesDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div  class="slide hide-slide" data-id="${id}" data-title="${title}" data-date="${date}">
      <div class="slide-container">
        <div class="slide-media-container">
        <span class="media-slide-title">${title}</span>
       
       
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "slide", name)
          : VideoMediaSubFactory.render(video, title, "slide", "300", name)
      } 

        
</div>
         </div>
      </div>
`;
    return article;
  }

  return { getMediaCardDOM, getMediaSlidesDOM };
}
