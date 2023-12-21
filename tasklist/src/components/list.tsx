// En tu componente que renderiza la lista (por ejemplo, Listado.tsx)
import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Avatar } from "antd";

interface Element {
	id: string;
	name: string;
	avatar: string;
	createdAt: string;
}

const ListTask: React.FC = () => {
	const [elements, setElements] = useState<Element[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://6172cfe5110a740017222e2b.mockapi.io/elements"
				);
				setElements(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<List
			itemLayout="horizontal"
			dataSource={elements}
			loading={loading}
			renderItem={(item: Element) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={item.avatar} alt={item.name} />}
						title={item.name}
						description={`Created at: ${item.createdAt}`}
					/>
				</List.Item>
			)}
		/>
	);
};

export default ListTask;
