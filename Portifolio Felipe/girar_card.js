document.querySelectorAll(".flip-btn").forEach(button => {
    button.addEventListener("click", () => {
        let card = button.closest(".card");
        card.classList.toggle("flipped");
        button.textContent = card.classList.contains("flipped") ? "Voltar" : "Saber mais";
    });
});
