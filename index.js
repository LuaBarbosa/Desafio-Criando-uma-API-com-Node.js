const Koa = require("Koa");
const Bodyparser = require("koa-bodyparser");
const router = require("./src/routes");
const db = require("./src/utils/database")

require("dotenv").config( )

const server = new Koa();

server.use(Bodyparser());
server.use(router.routes());

server.listen(8081, () => console.log('Rodando'));