const TransactionService = require('../services/transactionService');

module.exports = class TransactionController {
    constructor() {
        this.transactionService = new TransactionService();
    }
    async list(ctx, next) {
        let list = (await this.transactionService.findAll(ctx.query.offset, ctx.query.limit)) || [];
        ctx.body = {
            data: list
        };
        await next();
    }
    async save(ctx, next) {
        let data = ctx.request.body;
        let transaction = await this.transactionService.save(data);
        if (transaction) {
            ctx.body = transaction;
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
        let transaction = await this.transactionService.findById(id);
        if (transaction) {
            ctx.body = transaction;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async remove(ctx, next) {
        let transaction = await this.transactionService.remove(ctx.params.id);
        if (transaction) {
            ctx.body = transaction;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
    async update(ctx, next) {
        let transaction = await this.transactionService.update(ctx.params.id, ctx.request.body);
        if (transaction) {
            ctx.body = transaction;
        } else {
            ctx.body = {
                status: 400,
                message: 'Datos invalidos'
            };
        }
        await next();
    }
}