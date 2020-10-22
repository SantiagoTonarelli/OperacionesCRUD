const Router = require("koa-router");
const UserController = require("./userController");
const TransactionController = require("./transactionController");
const BalanceController = require("./balanceController");
const AccountController = require("./accountController");


const router = new Router();
const account = new AccountController();
const transaction = new TransactionController();
const user = new UserController();
const balance = new BalanceController();

router.get("/accounts", (ctx, next) => account.list(ctx, next));
router.post("/accounts", (ctx, next) => account.save(ctx, next));
router.get("/accounts/:id", (ctx, next) => account.fetch(ctx, next));
router.delete("/accounts/:id", (ctx, next) => account.remove(ctx, next));
router.put("/accounts/:id", (ctx, next) => account.update(ctx, next));

router.get("/users", (ctx, next) => user.list(ctx, next));
router.post("/users", (ctx, next) => user.save(ctx, next));
router.get("/users/:id", (ctx, next) => user.fetch(ctx, next));
router.delete("/users/:id", (ctx, next) => user.remove(ctx, next));
router.put("/users/:id", (ctx, next) => user.update(ctx, next));

router.get("/transactions", (ctx, next) => transaction.list(ctx, next));
router.post("/transactions", (ctx, next) => transaction.save(ctx, next));
router.get("/transactions/:id", (ctx, next) => transaction.fetch(ctx, next));
router.delete("/transactions/:id", (ctx, next) => transaction.remove(ctx, next));
router.put("/transactions/:id", (ctx, next) => transaction.update(ctx, next));

router.get("/balance", (ctx, next) => balance.list(ctx, next));
router.post("/balance", (ctx, next) => transaction.save(ctx, next));
router.get("/balance/:id", (ctx, next) => balance.fetch(ctx, next));
router.delete("/balance/:id", (ctx, next) => balance.remove(ctx, next));
router.put("/balance/:id", (ctx, next) => balance.update(ctx, next));

module.exports = router;