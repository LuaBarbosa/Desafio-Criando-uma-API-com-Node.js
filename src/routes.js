const Router = require("koa-router");
const router = new Router();

const Auth = require("./controllers/auth");
const Jogo = require("../src/repositories/Jogos");
const Rodadas = require("./repositories/rodadas");





router.get('/jogos/rodada', Rodadas.obterRodada);
router.post('/auth', Auth.autenticar);
router.get('/classificacao', (ctx, next) => {next()}, (ctx) => {
    });
//router.post('/jogos', Jogo.obterJogos);



module.exports = router;