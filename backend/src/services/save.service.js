const {SavedSong} = require('../models');

const createFavorite = async ({userId, artistName, albumName, songName, trackId, previewUrl}) => {
    const newFavorite = await SavedSong.create({userId, artistName, albumName, songName, trackId, previewUrl});
    return newFavorite;
};

module.exports = {
    createFavorite,
}