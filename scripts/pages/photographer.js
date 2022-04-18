//import {formulaire} from './form.js';

async function getData(photographerId) {
  const res = await fetch("data/FishEyeData.json", {
    headers: {
      Accept: "application/json",
    },
  });
  //all data
  //const data = await res.json();
  const data = JSON.parse(localStorage.getItem("data"));
  //console.log(data);

  //photographer by id
  const photographer = data.photographers.find((p) => p.id === photographerId);

  //data media
  const portfolio = data.media
    .filter((obj) => obj.photographerId === photographerId)
    .map((obj) => obj);
  // console.log(portfolio);

  //data name
  const pathName = photographer.name;

  //likes box
  const totalLikes = portfolio.reduce((acc, curr) => {
    return acc + curr.likes;
  }, 0);
  //price box
  const dayPrice = photographer.price;
  // likesInfos(totalLikes, price);

  return {
    photographer,
    portfolio,
    pathName,
    totalLikes,
    dayPrice,
  };
}

//profil medias
function displayPhotographerInfo(photographer) {
  const { name, portrait, city, country, tagline } = photographer;
  const picture = `assets/photographers/${portrait}`;
  const header = document.querySelector(".photograph-header");
  header.innerHTML = `<div class="card2-bio">
        <div class="infos-photographer-media">
          <h2 class="photographer-name">${name}</h2>
          <p class="location">${city}, ${country}</p>
          <p class="tagline">${tagline}</p>
          </div>
          <div class="container-contact">
        <button class="contact_button">
          Contactez-moi
        </button>
        </div>
        </div>
        <div class="portrait-container">
        <img src=${picture} alt="${name}" class="portraitMedia">
        </div>`;
}

function displayMedia(portfolioArray, photographer) {
  const portfolioSection = document.querySelector(".portfolio-section");
  const lightboxSection = document.querySelector(".slider-modal");

  portfolioSection.innerHTML = "";

  portfolioArray.forEach((portfolioItem) => {
    const mediaModel = mediaFactory(portfolioItem, photographer);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    const mediaSlidesDOM = mediaModel.getMediaSlidesDOM();
    portfolioSection.appendChild(mediaCardDOM);
    lightboxSection.appendChild(mediaSlidesDOM);
  });
}

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("photographer"));
  const { photographer, portfolio, pathName, totalLikes, dayPrice } =
    await getData(photographerId);
  displayPhotographerInfo(photographer);

  // retrait de la fonction displayMedia pour la mettre dans SortData
  const triPopularite = portfolio.sort((a, b) => {
    return a.likes < b.likes ? 1 : -1;
  });

  // par defaut ont tri par Popularité
  displayMedia(triPopularite, photographer);

  displayPhotographerInfo(photographer);
  handleButtonsOptions();

  sortData(portfolio, photographer, totalLikes, dayPrice);

  formulaire(pathName);

  likesInfos(totalLikes, dayPrice);

  enableLightboxListeners();
}

init();
