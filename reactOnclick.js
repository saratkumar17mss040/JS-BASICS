'use strict';
import React from 'react';

function App() {
	const name = 'sarath';
	const listItems = [
		{
			id: 1,
			item: 'egg',
		},
		{
			id: 2,
			item: 'milk',
		},
	];
	return (
		<div>
			<button onClick={(event) => console.log(event.target.innerText)}>
				{name}
			</button>
			{listItems.map((ele) => {
				return (
					<li key={ele.id} onClick={(event) => console.log(ele)}>
						id: {ele.id} item: {ele.item}
					</li>
				);
			})}
		</div>
	);
}

export default App;
