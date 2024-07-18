import axios from 'axios';
import React, { useState } from 'react';

export default function WodButton() {
	const [wodList, setWodList] = useState();

	const handleClick = () => {
		axios.get('http://localhost:3000/api/wodList').then(response => {
			setWodList(response.data);
		});
	};

	return (
		<div>
			<ul>
				{wodList &&
					wodList.map(wodList => <li key={wodList.id}>{wodList.name}</li>)}
			</ul>
			<button onClick={handleClick}>조회</button>
		</div>
	);
}
