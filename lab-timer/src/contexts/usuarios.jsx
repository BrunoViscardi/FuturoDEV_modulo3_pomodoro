import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext()

export const UsuarioContextProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            email:"bruno.viscardi@hotmail.com",
            senha:"hoy"
        }

    ])

    



    return (
        <UsuarioContext.Provider value={{ usuarios}}>
            {children}
        </UsuarioContext.Provider>
    )

}