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
	);
}

export default App;
