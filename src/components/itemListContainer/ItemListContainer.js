import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ItemListContainer.css';
import ItemCount from '../itemCount/ItemCount.js';
import ItemList from '../itemList/ItemList.js';
import DataBase from '../item/ItemProducts.js'

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	const products = (product) =>
		new Promise ((resolve, reject) => {
			setTimeout(() => {
				if (product) {
					resolve(product);
				}else {
					reject("Algo salió mal.");
				}
			}, 2000);
		});

	useEffect(() => {
		products(DataBase)
			.then((res) => setItems(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{items.length
				? items.map((item) => (
					<>
						<Link to={`/item/${item.id}`}>
							<ItemList item={item} key={item.id} />
						</Link>
						<ItemCount initial="1" stock="8" />
					</>	
					))
				: "Loading..."}
		</>
	);
}

export default ItemListContainer;