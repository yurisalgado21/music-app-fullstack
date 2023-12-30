import React from "react";
import DataContext from "./DataContext";

type DataProviderProps = {
    children: React.ReactNode;
};

function DataProvider({children}: DataProviderProps) {

    const context = {

    };
    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;