"use strict";

const crochetToggle = document.querySelector("#croche");
const crochetGallery = document.querySelector("#croche-galeria");
const crochetAction = crochetToggle?.querySelector("[data-crochet-action]");

if (crochetToggle && crochetGallery && crochetAction) {
  crochetToggle.addEventListener("click", () => {
    const isExpanded = crochetToggle.getAttribute("aria-expanded") === "true";
    crochetToggle.setAttribute("aria-expanded", String(!isExpanded));
    crochetGallery.hidden = isExpanded;
    crochetAction.textContent = isExpanded ? "Ver fotos" : "Ocultar fotos";

    if (!isExpanded) {
      crochetGallery.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
