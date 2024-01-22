import CvDownload from "./components/CvDownload.jsx";
import Location from "./components/Location.jsx";
import Reloj from "./components/Reloj.jsx";
import ToggleLanguage from "./components/ToggleLanguage.jsx";
import Weather from "./components/Weather.jsx";
import DataContextProvider from "./context/DataContextProvider.jsx";

function App() {
  return (
    <DataContextProvider>
    	<div className=" h-screen w-screen flex justify-center items-center ">
    		<div className=" bg-slate-300 w-3/4 h-3/4 ">
    			<ToggleLanguage />
    			<div className="flex justify-between px-2 items-center ">
    				<Location/>
    				<Weather/>
    			</div>
    			<CvDownload />
    			<Reloj />
    		</div>
    	</div>
    </DataContextProvider>
    // <>
    //     <div class="fixed top-0 w-screen h-14"> NAVBAR </div>
    //     <div class=" bg-green-500 fixed w-14 h-full right-0 top-14">
	// 		<div className="bg-purple-700 rounded-full mx-1 mt-16 w-4/5 h-80"></div>
	// 	</div>
    //     <div class=" bg-blue-600 mt-14 me-14 flex flex-wrap gap-5">
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
	// 		<div className="h-[300px] w-[600px] bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam sapiente mollitia veritatis blanditiis! Accusantium similique at adipisci corrupti vel.</div>
			
	// 	</div>
    // </>
  );
}

export default App;
