document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = parseInt(document.getElementById('Edad').value.trim(), 10);
    
    if (nombre === '' || apellidos === '' || isNaN(edad) || edad <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }
    
    const infoContent = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Edad:</strong> ${edad}</p>
    `;
    
    document.getElementById('infoContent').innerHTML = infoContent;
    document.getElementById('infoBox').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('infoBox').classList.add('hidden');
    document.getElementById('myform').reset();
    document.getElementById('nombre').focus();
});

