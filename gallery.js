
"use strict"
let currentSlide = 1;
function showslide(n) { /*nie musimy definiować n, bo przyjmuje wartość j */
    document.querySelector(".show") 
        .classList.remove("show");
    document.querySelector("#slide"+n)
        .classList.add("show");
        currentSlide=n /*currentSlide powinno przyjąć wartość n, bo inaczej, jak będziemy przełączać strzałkami, to startujemy nie z tego slajdu, który wybraliśmy pinem, tylko od pierwszego. A jak przyjmie, to leci do następnego*/
}
for (let j=1; j<=5; j++){
    document.querySelector("#pin"+j)
    .addEventListener("click",()=> /*arrow function wrzuca krótko funkcję pod pętlą */
    {
        showslide(j);
    })}

function shownextslide() {
    document.querySelector("#slide" + currentSlide)
        .classList.remove("show");
    currentSlide++;
    if (currentSlide == 6) {
        currentSlide = 1;
    }
    document.querySelector("#slide" + currentSlide)
        .classList.add("show");
}
document.querySelector("#next").addEventListener("click", shownextslide);

function showprevslide() {
    document.querySelector("#slide" + currentSlide)
        .classList.remove("show");
    currentSlide--;
    if (currentSlide == 0) {
        currentSlide = 5;
    }
    document.querySelector("#slide" + currentSlide)
        .classList.add("show");
}
document.querySelector("#prev").addEventListener("click", showprevslide);