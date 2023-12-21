// Tasks.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, Input, List } from "antd";
import { addTask } from "./taskSlice";

const Tasks: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [taskDescription, setTaskDescription] = useState("");

	const tasks = useSelector((state: any) => state.tasks.tasks);
	const dispatch = useDispatch();

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		if (taskDescription.trim() !== "") {
			dispatch(addTask(taskDescription));
			setIsModalVisible(false);
			setTaskDescription("");
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setTaskDescription("");
	};

	return (
		<div>
			<Button type="primary" onClick={showModal}>
				Agregar nuevo task
			</Button>
			<List
				dataSource={tasks}
				renderItem={(task: any) => (
					<List.Item key={task.id}>{task.description}</List.Item>
				)}
			/>

			<Modal
				title="Agregar nuevo task"
				open={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form>
					<Form.Item>
						<Input
							placeholder="Descripción del task"
							value={taskDescription}
							onChange={(e) => setTaskDescription(e.target.value)}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default Tasks;
