//Modules
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import Root from "./components/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Game from "./components/Game/Game.jsx";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard.jsx";
import Rules from "./components/Rules/Rules.jsx";
import About from "./components/About/About.jsx";
//Loaders
import { loader as loaderImage } from "./components/Game/Game.jsx";
import { loader as loaderLeaderBoard } from "./components/LeaderBoard/LeaderBoard.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <HomePage /> },
			{
				path: "/game/:difficulty",
				element: <Game />,
				loader: loaderImage,
				errorElement: <ErrorPage />,
			},
			{
				path: "/leaderboard",
				element: <LeaderBoard />,
				loader: loaderLeaderBoard,
				errorElement: <ErrorPage />,
			},
			{ path: "/rules", element: <Rules /> },
			{ path: "/about", element: <About /> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
