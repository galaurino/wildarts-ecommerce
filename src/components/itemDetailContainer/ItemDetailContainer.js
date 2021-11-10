import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataBase from '../item/ItemProducts.js'
import ItemDetail from '../itemDetail/ItemDetail.js';

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const {id} = useParams();

	const getItem = (product) =>
		new Promise ((resolve, reject) => {
			setTimeout(() => {
				if (product) {
					resolve(product);
				}else {
					reject("Algo salió mal.");
				}
			}, 1000);
		});

	useEffect(() => {
		getItem(DataBase)
			.then((res) => setItem(res.find((item) => item.id === id)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{item
				? (
					<>
						<ItemDetail item={item} key={item.id} />
					</>	
					)
				: "Loading..."}
		</>
	);
}

export default ItemDetailContainer;