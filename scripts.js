const bancoUsuarios = [];

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

    const usuarioEncontrado = bancoUsuarios.find(user => user.usuario === novoUser.usuario);

    if(usuarioEncontrado){
        alert("Usuário já cadastrado!");
    }else{
        bancoUsuarios.push(novoUser);
        alert(`Usuário ${novoUser.usuario} cadastrado com sucesso!`);
    }
    
}

