import { createBrowserRouter, Navigate } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { Enlaces } from "../pages/Enlaces";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,

	},
	{
		path: "/enlaces",
		element: <Enlaces />
	},
	{
		path: "*",
		element: <Navigate to="/" replace />
	}
]);
