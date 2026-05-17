import { createBrowserRouter, Navigate } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { Enlaces } from "../pages/Enlaces";
import { ProgramaRedirect } from "../pages/ProgramaRedirect";
import { SalaSimulacion } from "../pages/SalaSimulacion";

export const routes = [
	{
		path: "/",
		element: <LandingPage />,
		active: true
	},
	{
		path: "/enlaces",
		element: <Enlaces />,
		active: false
	},
	{
		path: "/sala-simulacion",
		element: <SalaSimulacion />,
		active: true
	},
	{
		path: "/programa-cientifico",
		element: <ProgramaRedirect />,
		active: true
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
		active: true
	}
]

const activeRoutes = routes.filter((route) => route.active)

export const appRouter = createBrowserRouter(activeRoutes)