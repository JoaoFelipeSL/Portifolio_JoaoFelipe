let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const visibleItems = 1; // Número de itens visíveis por vez

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    const offset = -(currentIndex * (200 + 20)); // 600px de largura + 20px de margem
    track.style.transform = `translateX(${offset}px)`;
}

function toggleImage(item) {
    const images = item.querySelectorAll("img");
    images[0].classList.toggle("hidden");
    images[1].classList.toggle("hidden");
}
