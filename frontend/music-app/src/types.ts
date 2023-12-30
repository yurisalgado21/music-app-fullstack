export type AlbumType = {
    artistId: number;
    artistName: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
    releaseDate: string;
    trackCount: number;
};

export type SongType = {
    trackId: number,
    trackName: string,
    previewUrl: string,
};
