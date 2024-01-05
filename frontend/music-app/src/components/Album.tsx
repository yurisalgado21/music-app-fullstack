import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AlbumType, SongType } from '../types';
import getMusics from '../utils/musicsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';

export default function Album() {
  const {id} = useParams();
  const [albumInfo, setAlbumInfo] = useState<AlbumType | null>(null);
  const [musics, setMusics] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(false);

  const myFavoritesSongs = () => {
    setLoading(false);
  };

  useEffect(() => {
    const fetchAlbum = async () => {
        setLoading(true);
        const [albumData, ...albumMusics] = await getMusics(String(id));
        setAlbumInfo(albumData);
        setMusics(albumMusics);
        setLoading(false);
    };
    fetchAlbum();
  }, [id]);

  return (
    <div>
        <Link to="/favorites/musics">Go to my musics</Link>
        {loading && <Loading />}
        {!loading && albumInfo !== null && (
            <div>
                <img src={albumInfo.artworkUrl100}/>
                <h2>{albumInfo.artistName}</h2>
                <h3>{albumInfo.collectionName}</h3>
                <ul>
                    {musics.map((music) => (
                        <li key={music.trackId}>
                           <MusicCard 
                                trackId={music.trackId}
                                trackName={music.trackName}
                                previewUrl={music.previewUrl}
                                myFavoritesSongs={() => myFavoritesSongs()}
                           /> 
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
}
