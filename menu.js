let breakfast_btn = document.getElementById('breakfast');
let lunch_btn = document.querySelector("#lunch");
let dinner_btn = document.getElementById("dinner");
let fritay_btn = document.querySelector(".fritay_class");
let beerNwine_btn = document.getElementById("beernwine");

function displayBreakfast() {
    lunch_btn .style.display = "none"
    dinner_btn.style.display = "none";
    fritay_btn.style.display = "none";
    beerNwine_btn.style.display = "none";

    breakfast_btn.style.display = "block";
    
}

function displayLunch() {
    breakfast_btn.style.display = "none";
    dinner_btn.style.display = "none";
    fritay_btn.style.display = "none";
    beerNwine_btn.style.display = "none";
    
    lunch_btn .style.display = "block"
}

function displayDinner() {
    breakfast_btn.style.display = "none";
    lunch_btn .style.display = "none"
    fritay_btn.style.display = "none";
    beerNwine_btn.style.display = "none";
    
    dinner_btn.style.display = "block";
}

function displayFritay() {
    breakfast_btn.style.display = "none";
    lunch_btn .style.display = "none"
    dinner_btn.style.display = "none";
    beerNwine_btn.style.display = "none";
    
    fritay_btn.style.display = "block";
}

function displayBeernWine() {
    breakfast_btn.style.display = "none";
    lunch_btn .style.display = "none"
    dinner_btn.style.display = "none";
    fritay_btn.style.display = "none";

    beerNwine_btn.style.display = "block";
}