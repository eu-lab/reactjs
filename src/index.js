
import React from 'react';
import ReactDOM from 'react-dom';

function Relogio() {
	return (
		<div>
	      <h1>Hello, world!</h1>
	      <h2>It is {new Date().toLocaleTimeString()}.</h2>
	    </div>
	);
}

function main() {
	ReactDOM.render(
		<Relogio />,
		document.getElementById('root')
	);
}

setInterval(main, 1000);




