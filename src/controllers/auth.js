const users = require("../repositories/users");
const response = require("./response");
const Password = require("../utils/password");


const autenticar = async (ctx) => {
    const {email = null, password = null} = ctx.request.body;

    console.log(ctx.request.body);

    if(!email || !password) {
        return response (ctx, 400, {mensagem: 'Pedido mal formatado'})
    }
    const usuario = await users.obterUsuario(email);
         
    if(usuario){
        const comparison = await Password.check(password, usuario.senha);
        if(comparison){
        return response (ctx, 200, {mensagem: 'Sucesso!'});
        }
    }
    return response (ctx, 200, {mensagem: 'Usuario nao encontrado'})
};

module.exports = { autenticar };