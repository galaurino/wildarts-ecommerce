import './ItemDetail.css'
import DataBase from '../item/ItemProducts.js'

function ItemDetail({item}) {
	return (
		<div className="itemDetail">
			<div className="itemPres" key={item.id}>
				<img src={item.pictureUrl} alt={item.title} />
				<h2>{item.title}</h2>
				<h1>$ {item.price}</h1>
				<h3>{item.longdescription}</h3>
			</div>
		</div>
		)
};

export default ItemDetail;