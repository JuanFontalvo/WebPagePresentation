addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.btnMenu')
    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})

const imgPerfil = document.getElementById('imgPerfil')

imgPerfil.onmousedown = function mouseDown() {
    imgPerfil.style.width = '25rem';
}


imgPerfil.onmouseup = function mouseUp() {
    imgPerfil.style.width = '15rem';
}

imgPerfil.addEventListener('touchstart', () => {
    imgPerfil.style.width = '20rem';
})

imgPerfil.addEventListener('touchend', () => {
    imgPerfil.style.width = '15rem';
})