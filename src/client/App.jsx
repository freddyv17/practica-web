import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Videojuegos from "./components/Videojuegos";
import Error_page from "./components/Error_page";
import Agregar_Videojuego from "./components/Agregar_Videojuego";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <Error_page />,
  },
  {
    path: "/videojuegos",
    element: <Videojuegos />,
  },
  {
    path: "/videojuegos/agregar",
    element: <Agregar_Videojuego />,
  },
]);
function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
