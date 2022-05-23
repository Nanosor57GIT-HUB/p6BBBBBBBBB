//Appel du fetch avec la fonction getPhotographers
async function getPhotographers() {
  const res = await fetch("data/FishEyeData.json", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
/*si les données sont inexistantes dans localStorage alors retourne les données
 à l'interieur*/
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  return {
    //mettre les données fetch par localstorage
    photographers: JSON.parse(localStorage.getItem("data")).photographers,

    photographers: [...data.photographers],
  };
}

//Récupération des données pour l'affichage dans photographer_section(html)
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  //   console.log(photographersSection);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
