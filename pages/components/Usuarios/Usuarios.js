
import React,{useState,useContext} from "react";
import {useQuery, useMutation, queryCache, QueryClient} from "react-query";

async function fetchmisDatosRequest(){
    const response= await fetch('../../api/obtenerpeliculas')
    const data= await response.json()
    const {misDatos}=data;
    return misDatos
  }

export default function Usuarios(){
    const {data: misDatos}= useQuery("misDatos",fetchmisDatosRequest)
    console.log(misDatos)
    return(
        <div>
            <p>PRUEBA</p>
          
            <p>Prueba</p>
        </div>
    )
}
