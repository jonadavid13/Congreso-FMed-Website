import { RouterProvider } from "react-router"
import { appRouter } from "./routes/routes"

const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App