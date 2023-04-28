import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { About } from "./pages/About/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
