const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        underscored: true,
    });

    User.associate = (models) => {
        User.hasMany(models.SavedAlbum, {
            foreignKey: 'user_id',
            as: 'saved_album'
        });
        User.hasMany(models.SavedSong, {
            foreignKey: 'user_id',
            as: 'saved_song'
        });
    }

    return User;
};

module.exports = User;