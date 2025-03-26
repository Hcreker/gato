const imgGato = document.getElementById("imgGato");
const btnMusica = document.getElementById("btnMusica");
const musica = new Audio("./som/rat-dance-music.mp3");


var imgTroca = false;

btnMusica.addEventListener("click", () => {
    if (!imgTroca) {
        imgGato.src = "img/KMm4.gif";
        musica.play();
    } else {
        imgGato.src = "./img/Captura de tela 2025-03-19 154206.png";
        musica.pause();
        musica.currentTime = 0;
    }
    imgTroca = !imgTroca;
});



