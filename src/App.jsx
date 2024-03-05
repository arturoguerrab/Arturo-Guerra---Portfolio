import Layout from "./components/Layout/Layout.jsx";

import DataContextProvider from "./context/DataContextProvider.jsx";
import Profile from "./components/DashboardContainer/Profile.jsx";
import Experience from "./components/DashboardContainer/Experience.jsx";
import Contact from "./components/DashboardContainer/Contact.jsx";

function App() {
	return (
		<DataContextProvider>
			<Layout>
				<Profile />
				<Experience />
				<Contact />
			</Layout>
		</DataContextProvider>
	);
}

export default App;
