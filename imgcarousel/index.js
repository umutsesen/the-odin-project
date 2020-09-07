const img = document.getElementById('1')
const imga = document.getElementById('2')
let a = 0
function hide () {
    if (a === 0) {
        a++
    img.classList.toggle('next');
    imga.classList.toggle('previous');
    imga.style.display = 'block'
} else {
    a = a - 1
    imga.classList.toggle('next');
    img.style.transform = 'translateX(' + 1020 + 'px)'
    img.style.transform = 'translateX(' + 1 + '%)'
    imga.style.display = 'block'

}
    

}

function hideb () {

    
    

}
document.getElementById('next').addEventListener('click', () => hide())
document.getElementById('back').addEventListener('click', () => hideb())
