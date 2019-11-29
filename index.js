
window.addEventListener('DOMContentLoaded', () => {

    let openModal = document.querySelector(".modal-click");
    let modal = document.querySelector(".modal");
    let closeModal = document.querySelector(".close-modal");

    /* Opens Modal */
    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("is-visible");
    });

    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("is-visible");
    });

});


