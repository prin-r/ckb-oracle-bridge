const Koa = require("koa");
const router = require("./src/router");

const koa = new Koa();

koa.use(router.routes());

koa.listen(40000);
