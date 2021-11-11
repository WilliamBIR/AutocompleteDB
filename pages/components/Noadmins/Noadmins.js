import React,{useState,useContext} from "react";
import {AppContext} from '../../application/provider';


export default function Noadmins({Usuarios}){
    const[RangoUsuario,setRangoUsuario]=useContext(AppContext)
    const[User,setUser]=useState('')
    const[ListaUsers,setListaUsers]=useState([])
    const[ControlLista,setControl]=useState(0)
    const[Mensaje,setMensaje]=useState('')
    var Normales=[]
    Normales= Usuarios.map(Usuario=>{
        if(Usuario.Rango==="User"){
            Normales.push(Usuario);
        }
        return(Normales)
    })

    const Limite=2
    const handleInputChange= e =>{  
        console.log('Aqui')                
        setMensaje('')
        setUser(e.target.value);
        if(e.target.value.length===0){
            setListaUsers([]);
        }
        else{
            Acomodarlista(e.target.value)
            setUser(e.target.value)
            var aux=revisarrango(e.target.value)
            if(aux===0){
                setMensaje('')
            }
            else{
                Usuarios.map(Usuario=>{
                    if(Usuario.Nombre===e.target.value){
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
            if(removeAccents(Usuario.Nombre.toLowerCase()).includes(otro) && Usuario.Rango==="User"){
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
        setMensaje('')
        setUser(tabla);
        setControl(ListaUsers.indexOf(tabla))
        var aux=revisarrango(tabla)
        if(aux===0){
            setMensaje('')
        }
        else{
            Usuarios.map(Usuario=>{
                if(Usuario.Nombre===tabla){
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
        if(e.key==='ArrowDown' &&ControlLista<Limite-1){
            setControl(prevControl =>prevControl+1)
            
        }
        else if(e.key==='ArrowUp' &&ControlLista>0){
            setControl(prevControl =>prevControl-1)
        }
        else if(e.key==="Enter"){
            setUser(ListaUsers[ControlLista])
            var aux=revisarrango(ListaUsers[ControlLista])
            if(aux===0){
                setMensaje('')
            }
            else{
                Usuarios.map(Usuario=>{
                    if(Usuario.Nombre===ListaUsers[ControlLista]){
                        setMensaje('UserFound')
                    }
                })
            }
        }
    }
    




    return(
        <div>
        <p style={{display: "Admin"===RangoUsuario.Rango ? "block":"none" }}>Buscar Usuario:
        <input id="Another" name="usuarios" type="search" placeholder="Search" onChange={handleInputChange} onKeyDown={Teclapresionada}   value={User}></input>
        {Mensaje}
        </p>
        <ul id="ListaNoAdmin">
            {ListaUsers.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd} onClick={()=>Clickenopciones(asd)} value={asd}  style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
        </ul>

        </div>
    )
}
