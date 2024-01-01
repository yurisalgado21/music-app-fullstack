import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";

type DataProviderProps = {
    children: React.ReactNode;
};

function DataProvider({children}: DataProviderProps) {
    const [username, setUsername] = useState('')

    const login = (userdata: string) => {
        setUsername(userdata)
    }

    useEffect(() => {
        const nameSaved = sessionStorage.getItem('userName')
        console.log(nameSaved);
        
        if (nameSaved) {
          login(nameSaved)
        }
      }, [])

    const context = {
        login,
        username
    };
    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;