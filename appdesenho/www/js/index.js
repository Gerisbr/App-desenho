


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

quadro.width = window.innerWidth
quadro.height = window.innerHeight

lousa.fillStyle = "#eee"
lousa.fillRect(0, 0, quadro.width, quadro.height)

lousa.lineWidth = 5;
quadro.addEventListener("touchstart", function(evento){
    lousa.beginPath()
    lousa.moveTo(
        evento.touches[0].pageX,
        evento.touches[0].pageY
    )
    evento.preventDefault()
})

quadro.addEventListener("touchmove", function(evento){
    lousa.lineTo(
        evento.touches[0].pageX,
        evento.touches[0].pageY
    )
    lousa.strokeStyle = "#000";
    lousa.lineWidth = 5;
    lousa.stroke();
    evento.preventDefault()
})

