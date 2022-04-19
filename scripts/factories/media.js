class VideoMediaSubFactory {
  static render(video, type) {
    return `
    <video controls  preload="metadata" class="media-${type}-img lb-target">
                <source  src="assets/videos/${video}" type="video/mp4">
              </video>       
        </div> `;
  }
}

class ImageMediaSubFactory {
  static render(image, title, type, name) {
    return `   
     <img class="media-${type}-img lb-target" src="assets/Photos/${name}/${image}" alt="intitulé de la photo: ${title}">      
        </div> `;
  }
}

function mediaFactory(data, photographer) {
  const { id, date, image, likes, title, video } = data;
  const { name } = photographer;

  //mediaCard
  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="media-card" data-id="${id}" data-title="${title}" data-date="${date}" tabindex="0">
   
      
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "card", name, likes)
          : VideoMediaSubFactory.render(video, "card", name, title, likes)
      }
      <div class="media-card-text">
          <span class="media-card-title">${title}</span>
          <div class="likesByMedia">
          <i class="fas fa-heart  infos-Likes-Icon2" ></i>
          <i class="far fa-heart  infos-Likes-Icon1" alt="Cliquer pour liker"></i>    
           <p id="media-card-likes">${likes}</p>  
          </div>
        </div>

      </div>
`;

    return article;
  }

  //lightbox
  function getMediaSlidesDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="slide hide-slide" data-id="${id}" data-title="${title}" data-date="${date}">
      <div class="slide-container">
        <div class="slide-media-container">
        <span class="media-slide-title">${title}</span>
       
       
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "slide", name)
          : VideoMediaSubFactory.render(video, "slide", "300", name, title)
      } 

        
</div>
         </div>
      </div>
`;
    return article;
  }

  return { getMediaCardDOM, getMediaSlidesDOM };
}
