import { useEffect, useState } from "react";
import DataBase from '../item/ItemProducts.js'
import ItemDetail from '../itemDetail/ItemDetail.js';

const ItemDetailContainer = () => {
	const [items, setItems] = useState([]);

	const getItem = (product) =>
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
		getItem(DataBase)
			.then((res) => setItems(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{items.length
				? items.map((item) => (
					<>
						<ItemDetail item={item} key={item.id} />
					</>	
					))
				: "Loading..."}
		</>
	);
}

export default ItemDetailContainer;