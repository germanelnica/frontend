import React, { useState } from "react";
import { Menu, Button, Row, Col } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function App() {
	const navigate = useNavigate();
	const [selectedValue, setSelectedValue] = useState(null);

	return (
		<Col
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh", // Set height to 100% of the viewport height
			}}
		>
			<Row
				gutter={16}
				style={{
					margin: 16,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Col span={24}>
					<Button
						type="primary"
						size="large"
						style={{ height: "80px", fontSize: "24px" }}
						onClick={() => navigate("/tasks")}
					>
						Tasks
					</Button>
				</Col>
			</Row>
			<Row
				gutter={16}
				style={{
					margin: 16,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Col span={24}>
					<Button
						type="primary"
						size="large"
						style={{ height: "80px", fontSize: "24px" }}
						onClick={() => navigate("/tasks")}
					>
						Tasks
					</Button>
				</Col>
			</Row>
		</Col>
	);
}

export default App;
