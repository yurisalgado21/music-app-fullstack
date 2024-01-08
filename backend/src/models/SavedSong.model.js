const SavedSongModel = (sequelize, DataTypes) => {
    const SavedSong = sequelize.define('SavedSong', {
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
        },
        songName: {
            type: DataTypes.STRING
        },
        trackId: {
            type: DataTypes.INTEGER,
        },
        previewUrl: {
            type: DataTypes.STRING,
        },
    },  {
        tableName: 'saved_song',
        timestamps: false,
        underscored: true,
    })

    SavedSong.associate = (models) => {
        SavedSong.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    }

    return SavedSong
}


module.exports = SavedSongModel;