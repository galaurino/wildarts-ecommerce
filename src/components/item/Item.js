import './Item.css';

function Item({product}) {

	return (

				<div className="ItemPresentation" key={product.id}>

					<img src={product.pictureUrl} alt={product.title} />
					<h1>{product.price}</h1>
					<h2>{product.title}</h2>
					<h3>{product.description}</h3>

				</div>

		)
};

export default Item;