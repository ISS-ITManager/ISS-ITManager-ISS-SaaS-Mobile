import React, { createContext, useState, useContext } from 'react';

const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
    const [currentModule, setCurrentModule] = useState(localStorage.getItem("currentModule") || "main");

    const updateModule = (module) => {
        setCurrentModule(module);
        localStorage.setItem("currentModule", module); 
    };

    return (
        <ModuleContext.Provider value={{ currentModule, updateModule }}>
            {children}
        </ModuleContext.Provider>
    );
};

export const useModule = () => useContext(ModuleContext);
