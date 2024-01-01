import { createContext } from 'react';
// import {AlbumType} from '../types'

type DataContextProps = {
    username: string
    login: (userdata: string) => void
}

const DataContext = createContext({} as DataContextProps);
export default DataContext;