import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ItemListContainer.css';
import ItemList from '../itemList/ItemList.js';
import DataBase from '../item/ItemProducts.js'

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const {id:category} = useParams();

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
			.then((res) => { category ? setItems(res.filter(item => item.category === category)) : setItems(res)})
			
			.catch((err) => console.log(err));
	}, [category]);

	return (
		<>
			{items.length
				? items.map((item) => (
					<div className="ItemListContainer">
						<Link to={`/item/${item.id}`}>
							<ItemList item={item} key={item.id} />
						</Link>
					</div>	
					))
				: "Loading..."}
		</>
	);
}

export default ItemListContainer;