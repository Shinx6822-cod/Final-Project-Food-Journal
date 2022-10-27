import React from "react";
import Button from './Button';
import FormLogin from "./FormLogin";
import Menu from './Menu';

export default function App() {
	return (
		<div className="app">
   
   {/* Button untuk Form Login/Register */}
			<Button/>
   <FormLogin/>
   <Menu/>
		</div>
	);
}
