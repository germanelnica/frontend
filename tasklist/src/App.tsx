import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu"; // El componente que contiene los botones
import ListTask from "./components/list"; // El componente de las tareas
import Tasks from "./components/tasks/tasks"; // El componente de las tareas
import "antd/dist/antd.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} /> {/* 👈 Renders at /app/ */}
			<Route path="/tasks" element={<Tasks />} /> {/* 👈 Renders at /app/ */}
			<Route path="/list" element={<ListTask />} /> {/* 👈 Renders at /app/ */}
		</Routes>
	);
}

export default App;
