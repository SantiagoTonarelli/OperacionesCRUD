module.exports = function(types, sequelize) {
    sequelize.define(
        'account', {
            id: {
                type: types.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            currency: {
                type: types.STRING,
                allowNull: false,
            },
            userId: {
                type: types.INTEGER,
                allowNull: false,
            },
        }, {
            //TODO 1.3 timestamps que es?
            timestamps: true,
        }
    )
}