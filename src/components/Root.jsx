//Modules
import React from "react";
import { Outlet } from "react-router-dom";
//Components
import NavBar from "./NavBar/NavBar";
import FootNote from "./FootNote/FootNote";
//Css
import "./root.css";

function Root() {
	return (
		<div className="d-flex flex-column vh-100">
			<NavBar />
			<div className="d-flex justify-content-center flex-grow-1 main-background">
				<Outlet />
			</div>
			<FootNote />
		</div>
	);
}

export default Root;
