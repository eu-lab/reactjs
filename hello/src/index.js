
import React from 'react';
import ReactDOM from 'react-dom';

function Relogio() {
	return (
		<div>
	      <span>Exatamente {new Date().toLocaleTimeString()}</span>
	    </div>
	);
}


function Aviso(){
	return (
		<div>
			<p>Isto é um aviso</p>
		</div>
		);
}
function main() {
	ReactDOM.render(
		(<Aviso />, <Relogio />),
		document.getElementById('root')
	);
}

setInterval(main, 1000);




