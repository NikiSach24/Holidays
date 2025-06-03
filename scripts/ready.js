const button = document.getElementById("button-ready");

const shadow = document.getElementsByClassName("shadow")

const HB = document.getElementById("HB")
const horseDouble = document.getElementsByClassName("horse_double")
const repeat = document.getElementById("button-repeat")

button.addEventListener("click", () => {
    button.classList.add("readyanim");

    shadow[0].classList.add("shadowanim");

    setTimeout(() => {
        HB.classList.add("anim1");
        horseDouble[0].classList.add("anim2");
        repeat.classList.add("anim3");
    }, 1500);
});
