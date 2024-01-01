import React, { useContext, useState } from 'react'
import { AlbumType } from '../types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import searchAlbumsAPI from '../utils/fetchApi';
import DataContext from '../context/DataContext';

export default function Home() {
  const {username} = useContext(DataContext)
  const [nameArtist, setNameArtist] = useState('');
  const [inputName, setInputName] = useState('');
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleNameArtistChange = (event: React.ChangeEvent<
    HTMLInputElement>) => {
      setNameArtist(event.target.value);
    }

  const handleSearch = async () => {
    if (nameArtist.length >= 2) {
      setLoading(true)
      const data = await searchAlbumsAPI(nameArtist.toLocaleLowerCase());
      setAlbums(data);
      setInputName(nameArtist);
      setNameArtist('');
      setLoading(false);
    }
  }

  return (
    <div>
      <p>{username}</p>
      <h2>Home</h2>
      <form>
        <input 
          type="text"
          id="artist"
          value={nameArtist}
          placeholder="Artist Name"
          onChange={handleNameArtistChange}
        />
        <button
          type="button"
          id="button-search"
          disabled={nameArtist.length < 2}
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      {loading && <Loading />}
      {!loading && albums?.length > 0 && (
        <>
          <p>Resultado de álbuns de:
            {' '}
            {inputName}
          </p>
          <ul>
            {albums.map((album) => (
              <li key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>
                  <img src={album.artworkUrl100}/>
                  <p>{album.collectionName}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {!loading && albums.length === 0 && inputName.length >= 2 && (
        <p>
          Nenhum álbum foi encontrado
        </p>
      )}
    </div>
  )
}
