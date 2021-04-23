function welcomeMessage() {
    let name = prompt("What is your name?");
    document.querySelector("#welcomeMsg").textContent = "Hello " + name + "!";
    document.querySelector("#mars").src = "img/mars.jpg";
    document.querySelector("#jupiter").src = "img/jupiter2.jpg";
    document.querySelector("#alien").src = "img/alien.png";
    //document.body.style.backgroundImage = "url('img/ujan.jpg')";
    var audio = new Audio("/sound/alien.mp3");
    audio.play();
}
window.onload = welcomeMessage;
console.log(welcomeMessage);