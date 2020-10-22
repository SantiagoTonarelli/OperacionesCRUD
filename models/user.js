module.exports = function(types, sequelize) {
    sequelize.define(
        'user', {
            //TODO 1.4 es necesario o se 
            id: {
                type: types.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fullName: {
                type: types.STRING,
                allowNull: false
            },
            email: {
                type: types.STRING,
                allowNull: false
            },
            document: {
                type: types.STRING,
                allowNull: false
            },
        }, {
            timestamps: true,
        }
    )
}