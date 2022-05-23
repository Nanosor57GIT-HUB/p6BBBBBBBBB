 function formulaire(name, baseURL, id) {
   const ModalForm = document.querySelector(".modal-form");
   ModalForm.innerHTML = `<div class="windowContact">
          <div class="modalContact">
            <div class="photographersContact">
              <p aria-label="Contacter ${name}">Contactez-moi</p>
              <h2 class="name-photographer-Contact">${name}</h2>
            </div>

            <form            
              method="GET"
              action="${baseURL}?photographer=${id}"
              name="Me contacter"
              class="formClass"
              id="formId"  
            >
              <div class="name divInputs">
                <label for="prenom" class="prenom champ">Prénom</label>
                <input
                  type="text"
                  aria-label="Mettre votre Prénom"
                  name="prenom" 
                   autofocus                
                  placeholder="Votre Prénom"
                  id="prenom"
                  class="valid"
                  minlength="2"
                  maxlength="30"                          
                tabindex="0"
                 required
                />
              </div>

              <div class="lastName divInputs">
                <label for="nom" class="nom champ">Nom</label>
                <input
                  type="text"
                  aria-label="Mettre votre nom"
                  name="nom"               
                  id="nom"
                  class="valid"
                  minlength="2"
                  maxlength="30"
                  placeholder="Votre Nom"
                  tabindex="0"
                  required
                />
              </div>

              <div class="email divInputs">
                <label for="email" class="email champ">Email</label>
                <input
                  type="email"
                  aria-label="Mettre votre Email"
                  name="email"
                  id="email" 
                   class="valid"
                  minlength="10"
                  maxlength="60"
                  placeholder="Exemple@contact.fr"
                  tabindex="0"
                  required
                />
              </div>

              <div class="message divInputs">
                <label for="msg">Message :</label>
                <textarea
                aria-label="Ecrire votre message"
                name="msg"
                  id="msg"
                  class="valid"   
                  cols="50"
                  rows="8"
                  minlength="15"
                  maxlength="400"      
                  placeholder="Ecrire votre message ..."
                  tabindex="0"
                  />
                </textarea>
              </div>

              <div class="submitForm-btn">
                <input type="submit" aria-label="Envoyer votre message" class="btn-Envoyer" id="
                submit-btn" value="Envoyer" tabindex="0"/>
              </div>
            </form>
             <div class="closedContact">
              <button type="button" class="formClose"  aria-label="Cliquez pour fermer" tabindex="0" aria-hidden="true">&times</button>
            </div>
          </div>
        </div>`;

   const Contactbtn = document.querySelector(".contact_button");
   Contactbtn.onclick = () => {
     ModalForm.style.display = "block";
     document.getElementById("prenom").focus();
  }; 
   //Close modal formulaire by cross
   const CloseModal = document.querySelector(".formClose");
   CloseModal.onclick = (e) => {
     ModalForm.style.display = "none";
   }
  

   const form = document.getElementById("formId");
    let firstName = document.querySelector("#prenom")
    let lastName = document.querySelector("#nom");
    let email = document.querySelector("#email");

   form.addEventListener("submit", (e) => {
    e.preventDefault();
     alert("Formulaire envoyé");
     console.log(firstName.value);
     console.log(lastName.value);
     console.log(email.value);
     ModalForm.style.display = "none";
     
   });
   
 }

