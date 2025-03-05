module.exports = (sequelize, DataTypes) => {
    const api = sequelize.define(
        "client",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            client_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            client_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            client_config: {
                type: DataTypes.JSON,
            },
            status: {
                type: DataTypes.ENUM,
                values: ["active", "inactive"],
                defaultValue: "active",
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            modifiedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            createdBy: {
                type: DataTypes.INTEGER,
            },
            modifiedBy: {
                type: DataTypes.INTEGER,
            },
            deleted: {
                type: DataTypes.TINYINT(1),
                defaultValue: "0",
            }
            
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
    return api;
};
