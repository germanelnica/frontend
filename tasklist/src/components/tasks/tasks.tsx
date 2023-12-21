import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, Input, List, Space } from "antd";
import { addTask } from "./taskSlice";

interface formValues {
	descripcion: string;
}

const Tasks: React.FC = () => {
	const [form] = Form.useForm();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const tasks = useSelector((state: any) => state.tasks.tasks);
	const dispatch = useDispatch();

	const showModal = () => {
		setIsModalVisible(true);
		form.resetFields();
	};

	const handleOk = (values: formValues) => {
		if (values.descripcion.trim() !== "") {
			dispatch(addTask(values.descripcion));
			setIsModalVisible(false);
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
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
						tooltip="Campo requerido"
						name="descripcion"
						rules={[{ required: true, message: "Favor, agregue descripción" }]}
					>
						<Input placeholder="Descripción de la tarea" />
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
