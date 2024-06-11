document.addEventListener("DOMContentLoaded", function() {
    // Efecto parallax en el fondo
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('body');
        let scrollPosition = window.pageYOffset;
        parallax.estilos.backgroundPositionY = scrollPosition * 0.5 + "px";
    });

    // Mensajes dinámicos
    const messageSection = document.getElementById('messages');
    messages.forEach(msg => {
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<p>${msg}</p><span>- [Tu Nombre]</span>`;
        messageSection.appendChild(messageDiv);
    });
});
