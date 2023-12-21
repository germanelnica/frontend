import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/tasks/taskSlice";

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
});

export default store;
