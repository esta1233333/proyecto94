function adduser()
{
    nombre_usuario = document.getElementById("nombre_usuario").value;

    localStorage.setItem("nombre_usuario", nombre_usuario);

    window.location.replace("warzon_room.html");
}



