import React from "react"
import Menu_Superior from "../Menu_superior/Menu_superior"
import './styles.css';


export default function Home(){
   console.log('chegou na home')
    return(
       <div>
         <Menu_Superior/>
         <div className="Div_capa">
               
               <h1 > Isso é um titulo</h1>
                <span>Isso é um subtitulo</span>
         </div>
       </div>
   
    )
}