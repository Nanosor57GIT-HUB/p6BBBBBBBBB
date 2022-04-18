function photographerFactory(data) {
  const { name, portrait, city, country, price, tagline, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const baseURL = "photographer.html";
    const url = `${baseURL}?photographer=${id}`;
    article.innerHTML = `<a href=${url} >
        <img src=${picture} class="imageProfil" alt="">
        <h2 class="photographer-name-profil">${name}</h2>
      </a>
      <div class="profilInfos">
        <p class="location">${city}, ${country}</p>
        <p class="tagline">${tagline}</p>
        <p class="price-card">${price}€/jour</p>
      </div>
`;
    return article;
  }

  return { name, picture, getUserCardDOM };
}
