const bancoUsuarios = JSON.parse(localStorage.getItem("bancoUsuarios")) || [];;

function criarUsuario(){
    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    if(!usuario || !senha){
        alert("Usuário ou senha invalidos, digite novamente");
        return null;
    }else{
        return{usuario,senha};
    }
    
}

function cadastrarUsuario(){
    const novoUser = criarUsuario();

    if(!novoUser) return;

    const bancoUsuarios = JSON.parse(localStorage.getItem("bancoUsuarios")) || [];

    const usuarioEncontrado = bancoUsuarios.find(user => user.usuario === novoUser.usuario);

    if(usuarioEncontrado){
        alert("Usuário já cadastrado!");
    }else{
        bancoUsuarios.push(novoUser);
        localStorage.setItem("bancoUsuarios", JSON.stringify(bancoUsuarios));
        alert(`Usuário ${novoUser.usuario} cadastrado com sucesso!`);
    }
    
}

function fazerLogin(){
    const usuarioLogin = document.getElementById("user-login").value;
    const senhaLogin = document.getElementById("senha-login").value;

    if(!usuarioLogin || !senhaLogin){
        alert("Usuário ou senha em branco!");
        return;
    }
        

    const usuarioEncontrado = bancoUsuarios.find(user => user.usuario === usuarioLogin && user.senha === senhaLogin);

    if(usuarioEncontrado){
            alert(`Bem vindo ${usuarioLogin}`);
    }else{
            alert("Usuário ou senha incorretos");
    }
}

