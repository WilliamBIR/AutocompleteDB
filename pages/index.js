import {QueryClient, QueryClientProvider} from "react-query";
import Usuarios from './components/Usuarios/Usuarios';


const queryClient = new QueryClient()


export default function Home() {

  return (

    <QueryClientProvider client={queryClient}>
      <Usuarios/> 
    </QueryClientProvider>
  )
}
