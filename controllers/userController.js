const UserService = require('../services/userService');

module.exports = class UserController {
    constructor() {
        this.userService = new UserService();
    }
    async list(ctx, next) {
        let list = (await this.userService.findAll(ctx.query.offset, ctx.query.limit)) || [];
        ctx.body = { data: list };
        await next();
    }
    async save(ctx, next) {
        let data = ctx.request.body;
        let user = await this.userService.save(data);
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async fetch(ctx, next) {
        let id = parseInt(ctx.params.id);
        let user = await this.userService.findById(id);
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async remove(ctx, next) {
        let user = await this.userService.remove(ctx.params.id);
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async update(ctx, next) {
        let user = await this.userService.update(ctx.params.id, ctx.request.body);
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
}