
import Layout from "./components/Layout/Layout.jsx";

import DataContextProvider from "./context/DataContextProvider.jsx";


function App() {
	return (
		<DataContextProvider>
			<Layout>
				<div className="grid grid-cols-7 grid-rows-5 gap-8 w-full h-full">
					<div className="col-span-3 row-span-2 w-full h-full glassmorphism">1</div>
					<div className="col-span-3 row-span-3 col-start-1 row-start-3 w-full h-full glassmorphism">hola</div>
					<div className="col-span-2 row-span-3 col-start-4 row-start-1 w-full h-full glassmorphism">3</div>
					<div className="col-span-2 row-span-3 col-start-6 row-start-1 w-full h-full glassmorphism">4</div>
					<div className="col-span-4 row-span-2 col-start-4 row-start-4 w-full h-full glassmorphism">5</div>
				</div>
				<div className="grid grid-cols-7 grid-rows-5 gap-8 w-full h-full mt-10">
					<div className="col-span-3 row-span-2 w-full h-full glassmorphism">1</div>
					<div className="col-span-3 row-span-3 col-start-1 row-start-3 w-full h-full glassmorphism">2</div>
					<div className="col-span-2 row-span-3 col-start-4 row-start-1 w-full h-full glassmorphism">3</div>
					<div className="col-span-2 row-span-3 col-start-6 row-start-1 w-full h-full glassmorphism">4</div>
					<div className="col-span-4 row-span-2 col-start-4 row-start-4 w-full h-full glassmorphism">5</div>
				</div>
			</Layout>
		</DataContextProvider>
	);
}

export default App;
