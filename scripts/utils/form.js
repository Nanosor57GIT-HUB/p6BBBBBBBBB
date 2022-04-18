/*export*/ function formulaire(name, baseURL, id) {
  const ModalForm = document.querySelector(".modal-form");
  ModalForm.innerHTML = `<div class="windowContact">
          <div class="modalContact">
            <div class="closedContact">
              <button class="formClose" tabindex="11">&times</button>
            </div>

            <div class="photographersContactName">
              <p>Contactez-moi</p>
              <h3>${name}</h3>
            </div>

            <form            
              method="POST"
              action="${baseURL}?photographer=${id}"
              name="Me contacter"
              class="formClass"
              id="formId"
              type="submit"
            >
              <div class="name divInputs">
                <label for="prenom" class="prenom champ">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre Prénom"
                  id="prenom"
                  class="valid"
                  minlength="2"
                  maxlength="30"
                  aria-label="Mettre votre Prénom"
                  tabindex="6"
                />
              </div>

              <div class="lastName divInputs">
                <label for="nom" class="nom champ">Nom</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre Nom"
                  id="nom"
                   class="valid"
                  minlength="2"
                  maxlength="30"
                  aria-label="Mettre votre nom"
                  tabindex="7"
                />
              </div>

              <div class="email divInputs">
                <label for="email" class="email champ">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Exemple@contact.fr"
                  id="email"
                   class="valid"
                  minlength="10"
                  maxlength="60"
                  aria-label="Mettre votre Email"
                  tabindex="8"
                />
              </div>

              <div class="message divInputs">
                <label for="msg">Message :</label>
                <textarea
                  id="msg"
                  class="valid"
                  name="msg"
                  placeholder="Ecrire votre message ..."
                  cols="50"
                  rows="8"
                  minlength="15"
                  maxlength="400"
                  aria-label="Ecrire votre message"
                  tabindex="9">
                </textarea>
              </div>

              <div class="submitForm-btn">
                <input type="submit" aria-label="Envoyer votre message" class="btn-Envoyer" id
                submit-btn value="Envoyer" tabindex="10"/>
              </div>
              
            </form>
          </div>
        </div>`;

  //Open modal Formulaire by button "Contactez-moi"
  const Modal = document.querySelector(".modal-form");

  const Contactbtn = document.querySelector(".contact_button");
  Contactbtn.onclick = () => {
    Modal.style.display = "block";

    //Close modal formulaire by cross
    const CloseModal = document.querySelector(".formClose");
    CloseModal.onclick = () => {
      Modal.style.display = "none";
    };

    //Close ModalFormulaire
    const EnvoyerBtn = document.querySelector(".btn-Envoyer");
    EnvoyerBtn.onclick = (e) => {
      Modal.style.display = "none";
      e.preventDefault();
    };
  };
}
