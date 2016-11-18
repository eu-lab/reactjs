
import React from 'react';
import ReactDOM from 'react-dom';


function Menu(){
	return (
		<div>
		<li><a href="{home}">Início</a></li>
	    <li><a href="{sobre}">Sobre</a></li>
	    <li><a href="{reactjs}">ReactJS</a></li>
	    </div>
	    )
}


function NavBar() {
	return (
		
	  <nav>
	    <div className="nav-wrapper">
	      <a href="#" className="brand-logo center">Logo</a>
	      <ul id="nav-mobile" className="left hide-on-med-and-down">
	        <Menu />
	      </ul>
	    </div>
	  </nav>


	);
}

function Content() {
	return (
		<div className="container">
			<p>Ola</p>
		</div>
	);
}

ReactDOM.render(
		(<NavBar />),
		document.getElementById('nav')
	);

CVBO


