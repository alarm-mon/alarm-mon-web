import axios from 'axios';
import React, { useState } from 'react';

export default function WodButton() {
	const [wodList, setWodList] = useState();

	const handleClick = () => {
		axios.get('http://localhost:4000/crossfit/daily/wod').then(response => {
			setWodList(response.data.wodTexts);
			console.log(response.data.wodTexts);
			// debugger;
		});
	};

	return (
		<div>
			<ul>
				{wodList && wodList.map(test => <li key={Math.random()}>{test}</li>)}
			</ul>
			<button onClick={handleClick}>조회</button>
		</div>
	);
}
