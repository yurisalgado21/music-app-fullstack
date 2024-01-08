const {SavedSong} = require('../models');
const saveService = require('../services/save.service')

const saveSong = async (req, res) => {
    try {
        const {userId, artistName, albumName, songName, trackId, previewUrl} = req.body;
        const musicExist = await SavedSong.findOne({where: {trackId}});
        if (musicExist) {
            return res.status(409).json({
                message: 'Music already registered',
              });
        }
        const newFavorite = await saveService.createFavorite({userId, artistName, albumName, songName, trackId, previewUrl});
        return res.status(200).json(newFavorite);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    saveSong,
}