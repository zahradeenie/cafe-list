let cafeCard = document.querySelectorAll(".cafe-card");
let modalBg = document.querySelector(".modal-bg");
let closeModal = document.querySelector(".close-modal");
let cafeModal = document.querySelectorAll("[data-target]");

//opening modals
function openModal() {
    modalBg.classList.add("is-visible");
};

for (i = 0; i < cafeCard.length; i++) {
    cafeCard[i].addEventListener('click', openModal);
};

console.log(cafeModal.length);
console.log(cafeCard.length);





//closing modals
closeModal.addEventListener("click", () => {
    modalBg.classList.remove("is-visible");
});

window.addEventListener("click", (event) => {
    if (event.target === modalBg) {
        modalBg.classList.remove("is-visible");
    };
});
