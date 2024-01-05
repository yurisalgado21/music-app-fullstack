import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { getFavoriteSongs } from '../utils/favoritesSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';

export default function FavoritesMusics() {
  const [loading, setLoading] = useState(false);
  const [myMusics, setMyMusics] = useState<SongType[]>([]);

  useEffect(() => {
    const getMyMusics = async () => {
        setLoading(true);
        const myList = await getFavoriteSongs();
        setMyMusics(myList);
        setLoading(false);
    };
    getMyMusics();
  }, [])

  const myFavoritesSongs = (trackId: number) => {
    setMyMusics((prevFavorite) => prevFavorite.filter((song) => song.trackId !== trackId))
  }

  return (
    <div>
        <div>
            <h2>My Musics</h2>
            {loading && <Loading />}
            {!loading && myMusics !== null && (
                <ul>
                    {myMusics?.map((music) => (
                        <li key={music.trackId}>
                            <img src={music.previewUrl} />
                            <MusicCard
                                trackId={music.trackId}
                                trackName={music.trackName}
                                previewUrl={music.previewUrl}
                                myFavoritesSongs={() => myFavoritesSongs(music.trackId)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}
