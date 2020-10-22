const BalanceService = require('../services/balanceService');

module.exports = class BalanceController {
    constructor() {
        this.balanceService = new BalanceService();
    }
    async list(ctx, next) {
        let list = (await this.balanceService.findAll(ctx.query.offset, ctx.query.limit)) || [];
        ctx.body = {
            data: list
        };
        await next();
    }

    async save(ctx, next) {
        let balance = await this.balanceService.save(ctx.request.body);
        if (balance) {
            ctx.body = balance;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }

    async fetch(ctx, next) {
        let balance = await this.balanceService.findById(ctx.params.id);
        if (balance) {
            ctx.body = balance;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async remove(ctx, next) {
        let balance = await this.balanceService.remove(ctx.params.id);
        if (balance) {
            ctx.body = balance;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async update(ctx, next) {
        let balance = await this.balanceService.update(ctx.params.id, ctx.request.body);
        if (balance) {
            ctx.body = balance;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
}