import Contact from "./components/DashboardContainer/Contact/Contact.jsx";
import Experience from "./components/DashboardContainer/Experience/Experience.jsx";
import Profile from "./components/DashboardContainer/Profile/Profile.jsx";
import Layout from "./components/Layout/Layout.jsx";

import DataContextProvider from "./context/DataContextProvider.jsx";

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
