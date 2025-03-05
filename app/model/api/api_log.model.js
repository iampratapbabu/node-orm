module.exports = (sequelize, DataTypes) => {
    const apiLogs = sequelize.define(
        "api_log",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            env_id: {
                type: DataTypes.STRING
            },
            api_name: {
                type: DataTypes.STRING
            },
            url: {
                type: DataTypes.STRING
            },
            method: {
                type: DataTypes.STRING,
            },
            request_body: {
                type: DataTypes.JSON
            },
            req_header: {
                type: DataTypes.JSON
            },
            response: {
                type: DataTypes.JSON
            },
            status: {
                type: DataTypes.ENUM,
                values: ["Requested", "Success", "Failed","Pending"],
                defaultValue: "Requested",
            },
            ip: {
                type: DataTypes.STRING
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            modifiedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            deleted: {
                type: DataTypes.TINYINT(1),
                defaultValue: "0",
            },


        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
    return apiLogs;
}