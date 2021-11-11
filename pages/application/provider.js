import {createContext,useState} from 'react';


export default ({ children }) =>{
    const [RangoUsuario,setRangoUsuario] = useState(
        {Rango:'NotFound',Alerta:' '}
    );
    return (            
            <AppContext.Provider value={[RangoUsuario,setRangoUsuario]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();