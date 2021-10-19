import './ItemListContainer.css';
import ItemCount from '../itemCount/ItemCount.js';

export const ItemListContainer = (props) => {
	return (
		<div className="ItemListContainer-main">
			<h3 className="ItemListContainer">{props.greeting || 'Item List Container'}</h3>

			<ItemCount stock="8" />
		</div>
		);
};

export default ItemListContainer;