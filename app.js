// app.js

document.addEventListener('DOMContentLoaded', () => {
    const formularioRegistro = document.getElementById('registrationForm');
    const formularioBusqueda = document.getElementById('searchForm');
    const campoCedulaBusqueda = document.getElementById('searchIdNumber');
    const tablaUsuarios = document.getElementById('userTable');
    const detallesUsuario = document.getElementById('userDetails');
    const nombreUsuario = document.getElementById('detailFirstName');
    const apellidoUsuario = document.getElementById('detailLastName');
    const cedulaUsuario = document.getElementById('detailIdNumber');
    const fechaIngresoUsuario = document.getElementById('detailEntryDate');
    const correoUsuario = document.getElementById('detailEmail');
    const mensajeNoUsuario = document.getElementById('noUserMessage');

    let usuarios = []; // Este array se llenará con los datos del formulario de registro

    // Manejar el envío del formulario de registro
    formularioRegistro.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('firstName').value.trim();
        const apellido = document.getElementById('lastName').value.trim();
        const cedula = document.getElementById('idNumber').value.trim();
        const fechaIngreso = document.getElementById('entryDate').value.trim();
        const correo = document.getElementById('email').value.trim();

        if (nombre === '' || apellido === '' || cedula === '' || fechaIngreso === '' || correo === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Agregar el nuevo usuario al array
        usuarios.push({
            firstName: nombre,
            lastName: apellido,
            idNumber: cedula,
            entryDate: fechaIngreso,
            email: correo
        });

        // Limpiar el formulario de registro
        formularioRegistro.reset();
        alert('Usuario registrado exitosamente.');
    });

    // Manejar la búsqueda de usuarios
    formularioBusqueda.addEventListener('submit', (e) => {
        e.preventDefault();
        const valorBusqueda = campoCedulaBusqueda.value.trim();

        if (valorBusqueda === '') {
            alert('Por favor, ingresa una cédula para buscar.');
            return;
        }

        // Buscar el usuario por cédula
        const usuario = usuarios.find(u => u.idNumber === valorBusqueda);

        if (usuario) {
            nombreUsuario.textContent = usuario.firstName;
            apellidoUsuario.textContent = usuario.lastName;
            cedulaUsuario.textContent = usuario.idNumber;
            fechaIngresoUsuario.textContent = usuario.entryDate;
            correoUsuario.textContent = usuario.email;
            tablaUsuarios.style.display = 'table';
            mensajeNoUsuario.style.display = 'none';
        } else {
            tablaUsuarios.style.display = 'none';
            mensajeNoUsuario.style.display = 'block';
        }
    });
});
