const initServer = async function() {
    const Koa = require('koa');
    const logger = require('koa-logger');
    const json = require('koa-json');
    const bodyParser = require('koa-bodyparser');
    const router = require('./controllers/router');

    const app = new Koa();

    app.use(function(ctx, next) {
        return next().catch((err) => {
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    status: 401,
                    message: (err.originalError ? err.originalError.message : err.message)
                };
            } else {
                throw err;
            }
        });
    });

    app.use(bodyParser());
    app.use(json({
        pretty: true
    }));
    app.use(logger());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3000);

    console.log('Server started, see http://localhost:3000');
}

module.exports = {
    initServer
}