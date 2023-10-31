import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Agregar_Videojuego = () => {
  const [formData, setFormData] = useState({
    fecha_lanzamiento: "",
    nombre: "",
    precio: "",
    plataforma: "pc",
    url_imagen: "",
  });
  const navigate = useNavigate();
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("/api/videojuegos/agregar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          navigate("/videojuegos");
        } else {
          console.error("Error:", response.status);
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Formulario de Videojuego</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-2 fw-bold mt-3">
          <label htmlFor="fecha_lanzamiento">Fecha de Lanzamiento</label>
          <input
            type="date"
            name="fecha_lanzamiento"
            value={formData.fecha_lanzamiento}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-4 fw-bold mt-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-1 mt-3 fw-bold">
          <label htmlFor="precio">Precio $</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-2 mt-3 fw-bold">
          <label htmlFor="plataforma">Plataforma</label>
          <select
            name="plataforma"
            value={formData.plataforma}
            onChange={handleInputChange}
            className="form-control"
            required
          >
            <option value="pc">PC</option>
            <option value="ps">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="switch">Switch</option>
          </select>
        </div>
        <div className="form-group col-4 mt-3 fw-bold">
          <label htmlFor="url_imagen">URL de la Imagen</label>
          <input
            type="url"
            name="url_imagen"
            value={formData.url_imagen}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className=" my-3 btn btn-primary">
          Agregar videojuego
        </button>
      </form>
    </div>
  );
};
export default Agregar_Videojuego;
