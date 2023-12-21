import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, Input, List, Space } from "antd";
import { addTask } from "./taskSlice";

const Tasks: React.FC = () => {
	const [form] = Form.useForm();
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
				Agregar nueva tarea
			</Button>
			<List
				dataSource={tasks}
				renderItem={(task: any) => (
					<List.Item key={task.id}>{task.description}</List.Item>
				)}
			/>

			<Modal title="Agregar nuevo tarea" open={isModalVisible} footer={null}>
				<Form form={form} onFinish={handleOk}>
					<Form.Item
						rules={[{ required: true, message: "Favor, agregue descripción" }]}
					>
						<Input
							placeholder="Descripción de la tarea"
							value={taskDescription}
							onChange={(e) => setTaskDescription(e.target.value)}
						/>
					</Form.Item>
					<Space>
						<Button type="primary" htmlType="submit">
							Agregar
						</Button>
						<Button htmlType="button" onClick={handleCancel}>
							Cancel
						</Button>
					</Space>
				</Form>
			</Modal>
		</div>
	);
};

export default Tasks;
