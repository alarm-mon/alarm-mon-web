import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function WodList() {
	const [products, setProducts] = useState();

	useEffect(() => {
		axios.get('http://localhost:3000/api/products').then(response => {
			setProducts(response.data);
		});
	}, []);

	return (
		<ul>
			{products &&
				products.map(product => <li key={product.id}>{product.name}</li>)}
		</ul>
	);
}
