
const reaction = document.getElementById('reaction');
const sovaImage = document.getElementById('sovaImage');

function feed() {
    reaction.innerText = 'Сова счастливо ест!';
    sovaImage.src = 'feed.png';
    setTimeout(() => {
        sovaImage.src = 'sova.png';
        reaction.innerText = '';
    }, 2000);
}

function pet() {
    reaction.innerText = 'Сова прищурилась от удовольствия!';
    sovaImage.src = 'pet.png';
    setTimeout(() => {
        sovaImage.src = 'sova.png';
        reaction.innerText = '';
    }, 2000);
}

function sleep() {
    reaction.innerText = 'Сова сладко уснула.';
    sovaImage.src = 'sleep.png';
    setTimeout(() => {
        sovaImage.src = 'sova.png';
        reaction.innerText = '';
    }, 2000);
}
