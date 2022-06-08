let quadro = document.getElementById("quadro")
let lousa = quadro.getContext("2d")

quadro.width = window.innewidth 
quadro.innerHeight = window.innerHeight


lousa.fillStyle = "#eee"
lousa.fillRect(0,0,quadro.width,quadro.height)

lousa.lineWidth = 5;
quadro.addEventListener("touchstart",function(evento){
    lousa.beginPath()
    lousa.moveto(
        evento.touches[0].pageX,
        evento.touches[0].pageY
        
    )
    evento.preventDefault()
})

quadro.addEventListener('touchmove', function(evento) {
    lousa.lineTo(
        evento.touches[0].pageX,
        evento.touches[0].pageY
    )

    lousa.strokeStyle = "#000"
    lousa.lineWidth = 5
    lousa.stoke()
    evento.preventDefault()
    
});