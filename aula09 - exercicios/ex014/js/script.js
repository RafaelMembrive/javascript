
function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //condição de manha
        img.src = '../img/manha.png'
        document.body.style.background = "#a0f4f0"
    } else if (hora >=12 && hora < 18) {
        //condição de tarde
        img.src = '../img/tarde.png'
        document.body.style.background = "#f4f4a0"
    } else {
        //condição de noite
        img.src = '../img/noite.png'
        document.body.style.background = "#1b1a2a"
    }
}