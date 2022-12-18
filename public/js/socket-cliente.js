// Referenmcias del HTML
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

const socket = io()

socket.on('connect', () => {
    console.log('Conectado');

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})