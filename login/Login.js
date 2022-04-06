function logar(){
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');

    if(usuario.value == "easyvagas" && senha.value == '12345'){
        localStorage.setItem('acesso',true);
        alert('usuario autenticado');
        window.location.href("../principal/Mapa.html");

    }else{
        alert("Usuario ou senha invalidos!");
    }
}