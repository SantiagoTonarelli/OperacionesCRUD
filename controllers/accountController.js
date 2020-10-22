const AccountService = require('../services/accountService');

module.exports = class AccountController {
    constructor() {
        this.accountService = new AccountService();
    }
    async list(ctx, next) {
        let list = (await this.accountService.findAll(ctx.query.offset, ctx.query.limit)) || [];
        ctx.body = {
            data: list
        };
        await next();
    }
    async save(ctx, next) {
        let account = await this.accountService.save(ctx.request.body);
        if (account) {
            ctx.body = account;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async fetch(ctx, next) {
        let account = await this.accountService.findById(ctx.params.id);
        if (account) {
            ctx.body = account;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async remove(ctx, next) {
        let account = await this.accountService.remove(ctx.params.id);
        if (account) {
            ctx.body = account;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async update(ctx, next) {
        let account = await this.accountService.update(ctx.params.id, ctx.request.body);
        if (account) {
            ctx.body = account;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
}