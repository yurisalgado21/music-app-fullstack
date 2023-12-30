const SavedAlbumModel = (sequelize, DataTypes) => {
    const SavedAlbum = sequelize.define('SavedAlbum', {
        saveId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        artistName: {
            type: DataTypes.STRING
        },
        albumName: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'saved_album',
        timestamps: false,
        underscored: true,
    })

    SavedAlbum.associate = (models) => {
        SavedAlbum.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };
    return SavedAlbum;
}

module.exports = SavedAlbumModel;