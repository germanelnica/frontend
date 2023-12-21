import React from "react";
import { Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Row style={{ marginBottom: 16 }}>
				<Col
					span={24}
					style={{
						alignContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Button
						type="primary"
						size="large"
						style={{
							height: "60px",
							fontSize: "24px",
							borderRadius: 16,
							width: "120px",
						}}
						onClick={() => navigate("/tasks")}
					>
						Tasks
					</Button>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col
					span={24}
					style={{
						alignContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Button
						type="primary"
						size="large"
						style={{
							height: "60px",
							fontSize: "24px",
							borderRadius: 16,
							width: "120px",
						}}
						onClick={() => navigate("/list")}
					>
						Lists
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Menu;
