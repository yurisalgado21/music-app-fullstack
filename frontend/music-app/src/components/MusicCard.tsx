import { useEffect, useState } from 'react'
import { SongType } from '../types'
import imageCheckedHeart from '../assets/checked_heart.png'
import emptyImage from '../assets/empty_heart.png'
import { addSong, removeSong, getFavoriteSongs } from '../utils/favoritesSongsAPI';

export default function MusicCard(track: SongType & {myFavoritesSongs: () => void}) {
  const {trackId, trackName, previewUrl, myFavoritesSongs} = track;
  const [checked, setChecked] = useState(false);
  const [favoriteMusic, setFavoriteMusic] = useState(false);
  const [listMyFavoritesMusics, setListMyFavoritesMusics] = useState<SongType[]>();
  const [loading, setLoading] = useState(false);

  console.log(listMyFavoritesMusics);
  console.log(loading);

  const isFavoriteMusic = async (isFavorite: boolean) => {
    setFavoriteMusic(isFavorite);
    if (!favoriteMusic) {
        await addSong({trackId, trackName, previewUrl});
    }
  }

  const notFavoriteMusic = async (notFavorite: boolean) => {
    setFavoriteMusic(notFavorite);
    if (favoriteMusic) {
        await removeSong({trackId, trackName, previewUrl});
    }
  }

  const handleChecked = () => {
    if(!checked) {
        setChecked(true);
        isFavoriteMusic(true);
        myFavoritesSongs();
    } else {
        setChecked(false);
        notFavoriteMusic(false);
        myFavoritesSongs();
    }
  }

  useEffect(() => {
    const fetchGetFavoritesSongs = async () => {
        setLoading(true);
        const myFavoritesMusics = await getFavoriteSongs();
        myFavoritesMusics.filter((mySongs: SongType) => mySongs.trackId === trackId && setChecked(true));
        setListMyFavoritesMusics(myFavoritesMusics);
        setLoading(false);
    }
    fetchGetFavoritesSongs()
  }, [trackId])

  return (
    <div>
        <div>
            <h2>{trackName}</h2>
            <audio src={previewUrl} controls>
                <track kind="captions"/>
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
            </audio>
            <label>
                {checked ? <img src={imageCheckedHeart} alt="favorite" /> : <img src={emptyImage} alt="favorite" />}
                <input
                    type="checkbox"
                    onChange={handleChecked}
                    checked={checked}
                    style={{appearance: 'none'}}
                />
            </label>
        </div>
    </div>
  )
}
