
import React,{useState,useContext} from "react";
import {AppContext} from '../../application/provider';


export default function Usuario({Usuarios}){
    const[User,setUser]=useState('')
    const[ListaUsers,setListaUsers]=useState([])
    const[ControlLista,setControl]=useState(0)
    const[Mensaje,setMensaje]=useState('')
    const[RangoUsuario,setRangoUsuario]=useContext(AppContext)
    const Limite=2
    const handleInputChange= e =>{                  
        setMensaje('')
        setUser(e.target.value);
        if(e.target.value.length===0){
            document.getElementById('ListaUs').style.display='none';
            setListaUsers([]);
            setRangoUsuario({...RangoUsuario,["Rango"]:'NotFound',["Alerta"]:' '})

        }
        else{
            document.getElementById('ListaUs').style.display='list-item';
            Acomodarlista(e.target.value)
            setUser(e.target.value)
            var aux=revisarrango(e.target.value)
            if(aux===0){
                setRangoUsuario({...RangoUsuario,["Rango"]:'NotFound',["Alerta"]:' '})

            }
            else{
                Usuarios.map(Usuario=>{
                    if(Usuario.Nombre===e.target.value){
                        setRangoUsuario({...RangoUsuario,["Rango"]:Usuario.Rango,["Alerta"]:' '})
                        setMensaje('UserFound')
                    }
                })
            }
        }
    }    



    const Acomodarlista=(Abuscar)=>{
        var aux=[]
        var aux2=0
        var otro=removeAccents(Abuscar.toLowerCase());
        Usuarios.map(Usuario=>{                   
            if(removeAccents(Usuario.Nombre.toLowerCase()).includes(otro) ){
                if(aux2<Limite){    
                    aux2+=1;  
                    aux.push(Usuario.Nombre);
                    }
                }
            return(
                setListaUsers(aux)     
            )                
        })
    }

    const Clickenopciones=tabla=>{
        document.getElementById('ListaUs').style.display='none';
        setRangoUsuario({...RangoUsuario,["Alerta"]:' '})
        setMensaje('')
        setUser(tabla);
        setControl(ListaUsers.indexOf(tabla))
        var aux=revisarrango(tabla)
        if(aux===0){
            setRangoUsuario({...RangoUsuario,["Rango"]:'NotFound',["Alerta"]:' '})

        }
        else{
            Usuarios.map(Usuario=>{
                if(Usuario.Nombre===tabla){
                    setRangoUsuario({...RangoUsuario,["Rango"]:Usuario.Rango,["Alerta"]:' '})
                    setMensaje('UserFound')
                }
            })
        }
        Acomodarlista(tabla)
        
    }


    const revisarrango=Uwu=>{
        var aux=0
        Usuarios.map(Usuario=>{
            if(Usuario.Nombre===Uwu){
                aux+=1;
            }
        return(
            aux
        )

        })
        return(aux)
    }

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 

      const Teclapresionada=(e)=>{
        if(e.key==='ArrowDown' &&ControlLista<Limite-1 ){
            setControl(prevControl =>prevControl+1)
            
        }
        else if(e.key==='ArrowUp' &&ControlLista>0){
            setControl(prevControl =>prevControl-1)
        }
        else if(e.key==="Enter"){
            setRangoUsuario({...RangoUsuario,["Alerta"]:' '})
            setUser(ListaUsers[ControlLista])
            var aux=revisarrango(ListaUsers[ControlLista])
            if(aux===0){

                setRangoUsuario({...RangoUsuario,["Rango"]:"NotFound",["Alerta"]:' '})
            }
            else{
                document.getElementById('ListaUs').style.display='none';
        
                Usuarios.map(Usuario=>{
                    if(Usuario.Nombre===ListaUsers[ControlLista]){
                        setRangoUsuario({...RangoUsuario,["Rango"]:Usuario.Rango,["Alerta"]:' '})
                        setMensaje('UserFound')
                    }
                })
            }
        }
    }
    




    return(
        <div>
        <p>Usuario:
        <input id="Usuarios" name="usuarios" type="search" placeholder="Search" onChange={handleInputChange} onKeyDown={Teclapresionada}   value={User}></input>
        {Mensaje}
        </p>
        <ul id="ListaUs">
            {ListaUsers.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd} onClick={()=>Clickenopciones(asd)} value={asd}  style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
        </ul>
        </div>
    )
}
