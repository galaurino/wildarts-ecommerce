import './ItemList.css'
import Item from '../item/Item.js';

function ItemList({item:product}) {
	return (
		<div className="ItemList">
			<Item product={product} />
		</div>
		)
}

export default ItemList;