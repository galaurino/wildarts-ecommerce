import './ItemListContainer.css'

export const ItemListContainer = (props) => {
	return <h3 className="ItemListContainer">{props.greeting || 'Item List Container'}</h3>
}