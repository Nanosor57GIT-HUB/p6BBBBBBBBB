const selectSort = document.querySelector('.selectBox');

selectSort.innerHTML = `   <div class="works-sort">
        <div>
          <p class="sort-title">Trier par</p>
        </div>

        <div id="sort-wrapper">
          <div class="sort-base">
            <button id="select-first-option" class="select-option">
              <span id="select-first-option-text" data-filtre="Popularité" >Popularité</span>
            </button>
            <span class="fas fa-chevron-up arrow-down-open" role='button'></span>
          </div>

          <div class="flex-block-button">
          <div id="select-block-options" role="listbox">
            <button class="select-option date" data-filtre="Date">Date</button>
            <button class="select-option titre" data-filtre="Titre">Titre</button>
          </div>
          </div>
        </div>
      </div>`;



let isOpen = false;

const selectOptions = document.querySelector('#select-block-options');

let firstButtonText = document.querySelector('#select-first-option-text');

const arrow = document.querySelector('.arrow-down-open')

const optionsButtons = selectOptions.querySelectorAll('button');

const select = document.querySelector('.sort-base');

document.querySelector('#select-first-option').addEventListener('click', () => {
   arrow.classList.toggle("arrow-down-open");
  if (isOpen === false) {
    // On ouvre le faux select

    selectOptions.style.display = 'block';
    select.style.borderRadius = '7px 7px 0 0';

    isOpen = true;

    return handleButtonsOptions();
  }

  if (isOpen === true) {
    return closeSelect();
  }
});

function closeSelect() {
  // On ferme le faux select

  selectOptions.style.display = 'none';
  select.style.borderRadius = '7px';

  return (isOpen = false);
}


function handleButtonsOptions() {
  optionsButtons.forEach((button) => {
    button.onclick = () => {
      const buttonText = button.textContent;

      button.innerHTML = firstButtonText.textContent;
      button.dataset.filtre = buttonText;

      firstButtonText.innerHTML = buttonText;
      firstButtonText.dataset.filtre = buttonText;

      return closeSelect();
    };
  });
}

/*////////////////////////////////////////////////////////////////////*/

function sortData(data, photographer, totalLikes, dayPrice) {
  function tri(data) {
    for (let k = 0; k < optionsButtons.length; k++) {
      optionsButtons[k].addEventListener('click', function (e) {
       
        console.log(
          'test I',
          e.target.textContent,
          'dataset',
          e.target.dataset.filtre
        );

        if (e.target.dataset.filtre === 'Date') {
          const mediasSortedByDate = data.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
          displayMedia(mediasSortedByDate, photographer);
          likesInfos(totalLikes, dayPrice);
          enableLightboxListeners();
        } else if (e.target.dataset.filtre === 'Titre') {
          const mediasSortedByTitre = data.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          displayMedia(mediasSortedByTitre, photographer);
          likesInfos(totalLikes, dayPrice);
          enableLightboxListeners();
        } else if (e.target.dataset.filtre === 'Popularité') {
          const triPopularite = data.sort((a, b) => {
            return a.likes < b.likes ? 1 : -1;
          });
          displayMedia(triPopularite, photographer);
          likesInfos(totalLikes, dayPrice);
          enableLightboxListeners();
        }
      });
    }
   
  }

  tri(data);
  likesInfos(totalLikes, dayPrice);
  enableLightboxListeners();
}

