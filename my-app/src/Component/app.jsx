import React from "react";
import AddMenu from "./addMenu";
import Menu from "./Menu";
import NavbarAft from "./NavbarAftLog";
import NavbarBef from "./NavbarBefLog";
import MyList from './MyList';

export default function App() {
	return (
		<div>
			{/* <NavbarBef /> */}
			<hr/>
			<NavbarAft />
			{/* <AddMenu /> */}
			<Menu />
			<hr/>
			<MyList />
		</div>
	);
}
