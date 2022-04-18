//Mise en place d'une arrivée/départ du button "Passer au contenu" par le scroll

let button = document.getElementById("content_btn");
let scrollValue;
//addEvent du scroll
window.addEventListener("scroll", function (e) {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
 // console.log(scrollValue);
  if (scrollValue > 0.7) {
    content_btn.style.marginTop = `-155px`;
    content_btn.style.transition = "1s";
  } else if (scrollValue < 0.75) {
    content_btn.style.marginTop = `-230px`;
  }
});

