const track = document.getElementById("track");
const cards = document.querySelectorAll(".card");

let isDown = false;
let startX;
let scrollLeft;

/* START CORRECT */
window.addEventListener("load", () => {
track.scrollLeft = 0;
setActive(0);
});

/* DRAG START */
track.addEventListener("mousedown", (e) => {
isDown = true;
startX = e.pageX - track.offsetLeft;
scrollLeft = track.scrollLeft;
});

/* DRAG END */
track.addEventListener("mouseup", () => isDown = false);
track.addEventListener("mouseleave", () => isDown = false);

/* DRAG MOVE */
track.addEventListener("mousemove", (e) => {
if (!isDown) return;

e.preventDefault();

const x = e.pageX - track.offsetLeft;
const walk = (x - startX) * 1.2;

track.scrollLeft = scrollLeft - walk;

clampScroll();     // FIX laatste kaart bug
updateActive();
});

/* LIMIT SCROLL (BELANGRIJK FIX) */
function clampScroll(){

const maxScroll = track.scrollWidth - window.innerWidth;

if(track.scrollLeft < 0) track.scrollLeft = 0;
if(track.scrollLeft > maxScroll) track.scrollLeft = maxScroll;

}

/* ACTIVE CARD DETECTION */
function updateActive(){

const center = window.innerWidth / 2;

let closestIndex = 0;
let closestDistance = Infinity;

cards.forEach((card, i) => {

const rect = card.getBoundingClientRect();
const cardCenter = rect.left + rect.width / 2;

const distance = Math.abs(center - cardCenter);

if(distance < closestDistance){
closestDistance = distance;
closestIndex = i;
}

});

setActive(closestIndex);
}

/* SET ACTIVE */
function setActive(index){

cards.forEach(c => c.classList.remove("active"));
cards[index].classList.add("active");

}
const images = [
"images01.jpg.jpeg",
"images02.jpg.jpeg",
"images03.jpg.jpeg",
"images04.jpg.jpeg",
"images05.jpg.jpeg",
"images06.jpg.jpeg",
"images07.jpg.jpeg",
"images08.jpg.jpeg",
"images09.jpg.jpeg",
"images10.jpg.jpeg",
"images11.jpg.jpeg",
"images12.jpg.jpeg",
"images13.jpg.jpeg",
"images14.jpg.jpeg",
"images15.jpg.jpeg",
"images16.jpg.jpeg",
"images17.jpg.jpeg",
"images18.jpg.jpeg",
"images19.jpg.jpeg",
"images20.jpg.jpeg",
"images21.jpg.jpeg",
"images22.jpg.jpeg",
"images23.jpg.jpeg",
"images24.jpg.jpeg",
"images25.jpg.jpeg",
"images26.jpg.jpeg",
"images27.jpg.jpeg",
"images28.jpg.jpeg",
"images29.jpg.jpeg",
"images30.jpg.jpeg",
"images31.jpg.jpeg",
"images32.jpg.jpeg",
"images33.jpg.jpeg",
"images34.jpg.jpeg",
"images35.jpg.jpeg",
"images36.jpg.jpeg",
"images37.jpg.jpeg",
"images38.jpg.jpeg",
"images39.jpg.jpeg",
"images40.jpg.jpeg",
"images41.jpg.jpeg",
"images42.jpg.jpeg",
"images43.jpg.jpeg",
"images44.jpg.jpeg",
"images45.jpg.jpeg",
"images46.jpg.jpeg",
"images47.jpg.jpeg",
"images48.jpg.jpeg",
"images49.jpg.jpeg",
"images50.jpg.jpeg",
"images51.jpg.jpeg",
"images52.jpg.jpeg"
];

const imageBlocks = document.querySelectorAll(".image");

imageBlocks.forEach((block, i) => {
if(images[i]){
block.style.backgroundImage = `url('${images[i]}')`;
}
});