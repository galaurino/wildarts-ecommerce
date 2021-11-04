import { useParams } from "react-router-dom";

const Category = () => {
	const { categoryId } = useParams();
	return (
		<div className="ItemPresentation" key={categoryId.id}>

					<h1>{categoryId.id}</h1>
					<h2>{categoryId.title}</h2>
					<h3>{categoryId.description}</h3>

		</div>
		);
}

export default Category;