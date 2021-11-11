import { PrismaClient } from '@prisma/client'
import Provider from './application/provider';
import Lista from "./components/Peliculas/Lista";
import Usuario from './components/Usuarios/Usuario';
import Noadmins from './components/Noadmins/Noadmins';


export default function Home({posts,users}) {


  return (
    <div>
        <h1 className="autot">Autocompletar</h1>
        <p className="pregunta">What movie you are searching?</p>
        <Provider>
        <Usuario Usuarios={users}/>
        <Noadmins Usuarios={users}/>
        <Lista Peliculas={posts}/>
        </Provider>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.pelicula.findMany()
  const users =await prisma.usuario.findMany()
 
  return {
    props : { posts,users }
  }
}