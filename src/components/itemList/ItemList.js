import Item from '../item/Item.js';

function ItemList({item:product}) {
	return (
		<Item product={product} />
		)
}

export default ItemList;