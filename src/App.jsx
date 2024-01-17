import Hora from "./components/Hora.jsx"
import Reloj from "./components/Reloj.jsx"
import Vite from "./components/vite.jsx"
import DataContextProvider from "./context/DataContextProvider.jsx"


function App() {

  return (
    <DataContextProvider>
      <div className=" h-screen w-screen flex justify-center items-center ">
        <div className=" bg-slate-300 w-2/4 h-2/4 ">
          <Vite/>
          <Hora/>
          <Reloj/>
        </div>
      </div>
    </DataContextProvider>
  )
}

export default App
