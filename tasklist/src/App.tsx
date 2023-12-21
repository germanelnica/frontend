import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu"; // El componente que contiene los botones
import ListTask from "./components/list"; // El componente de las listado
import Tasks from "./components/tasks/tasks"; // El componente de las tareas
import "antd/dist/antd.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} />
			<Route path="/tasks" element={<Tasks />} />
			<Route path="/list" element={<ListTask />} />
		</Routes>
	);
}

export default App;
