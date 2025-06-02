function* imageHeadGenerator() {
    const images = ["images/head1.png", "images/head2.png", "images/head3.png", ""];
    let index = 0;

    while (true) {
        yield images[index];
        index = (index + 1) % images.length;
    }
}

function* imageHorseGenerator() {
    const images = ["images/horse1.png", "images/horse2.png", "images/horse3.png", "images/horse.png"];
    let index = 0;

    while (true) {
        yield images[index];
        index = (index + 1) % images.length;
    }
}

const imagesHead = imageHeadGenerator();
const imagesHorse = imageHorseGenerator();

const buttonHead = document.getElementById("button-head");
const buttonHorse = document.getElementById("button-body");

const objHead = document.getElementById("head");
const objHorse = document.getElementById("horse");

buttonHead.addEventListener("click", () => {
    objHead.src = imagesHead.next().value;
});

buttonHorse.addEventListener("click", () => {
    objHorse.src = imagesHorse.next().value;
});
