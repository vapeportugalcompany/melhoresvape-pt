
// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (!ageModal) return;

  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

if (yesBtn && ageModal) {
  yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    ageModal.style.display = "none";
  });
}

if (noBtn) {
  noBtn.addEventListener("click", () => {
    alert("Acesso proibido. Esta página é apenas para maiores de 18 anos.");
    window.location.href = "https://www.google.pt";
  });
}


