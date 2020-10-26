const responde = require("./response");
const Rodadas = require("../repositories/rodadas");

const obterRodada = async (rctx) => {
    const { rodada = null } = ctx.params;
    if(rodada){
        const result = await Rodadas.obterRodada(rodada);
        if(result){
            return rodada;
            console.log(result);
        }
        return response(ctx, 404, { message: 'Erro' });
    }

    return response(ctx, 400, { message: 'Mal formatado' });
};

obterRodada(2);


module.exports = { obterRodada }