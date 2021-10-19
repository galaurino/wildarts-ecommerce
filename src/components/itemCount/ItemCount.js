import React, { useState } from "react";

function ItemCount({stock}) {
	const [count, setCount] = useState(0);
	const onAdd = () => {
		if (count>=stock){
			alert("Has excedido el stock disponible.")
		}else {
			setCount(count + 1)
		}
	};
	const onSubtract = () => {
		if (count===0){
			alert("No puedes tener menos de 0 en cantidad.");
		}else {
			setCount(count - 1)
		};
	};

	return (
		<div className="ItemCount">

		<button onClick={onSubtract}>-</button>

		{count}

		<button onClick={onAdd}>+</button>

		</div>
		);
	};

export default ItemCount;