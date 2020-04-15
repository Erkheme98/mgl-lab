class Modal {
     constructor(){
            this.injectHTML();
            this.modal = document.querySelector(".modal");
            this.openModalButtons = document.querySelectorAll(".open-modal");
            this.closeIcon = document.querySelector(".modal__close");
            this.events();
     }
     events(){
        //neegdej baigaag ajiglah
        this.openModalButtons.forEach( el => 
            el.addEventListener("click", e => this.openModal(e)))
        //haah towchluur daragdsan esehiig ajiglah
        this.closeIcon.addEventListener("click", () => this.closeModal())
        //keyboard deerees towchluur daragdsan esehiig shalgah
        document.addEventListener("keyup", e => this.keyPressHandler(e));
     }

     keyPressHandler(e) {
         if(e.keyCode == 27){
             this.closeModal();
         }
     }
     openModal(e) {
        e.preventDefault();
        this.modal.classList.add("modal--is-visible");
     }

     closeModal() {
        this.modal.classList.remove("modal--is-visible"); 
     }
     injectHTML(){
        document.body.insertAdjacentHTML("beforeend", `<div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><img src="image/icons/mail.svg" class="section-title__icon">Send an e-mail</h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description"></p>
          </div>    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="image/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="image/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="image/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="image/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>`)
     }
}
export default Modal