import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favoritos from "./Favoritos";

const removeFavoriteIcon =
  "https://cdn.icon-icons.com/icons2/3960/PNG/512/heart_likes_like_love_dislike_icon_251433.png";

const addFavoriteIcon =
  "https://cdn.icon-icons.com/icons2/3960/PNG/512/love_heart_likes_like_add_to_favorites_icon_251428.png";

const Videojuegos = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [mostrarFavorito, setMostrarFavorito] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/videojuegos")
      .then(response => response.json())
      .then(data => {
        setVideojuegos(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  const mostrarDetallesClick = videojuego => {
    setVideojuegoSeleccionado(videojuego);
  };

  const agregarFavoritosClick = videojuego => {
    setListaFavoritos([...listaFavoritos, videojuego]);
  };

  const eliminarFavoritosClick = videojuegoId => {
    const updatedFavoritos = listaFavoritos.filter(
      item => item.id !== videojuegoId
    );

    setListaFavoritos(updatedFavoritos);
  };

  const mostrarFavoritosClick = () => {
    setMostrarFavorito(!mostrarFavorito);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <button className="mt-3 btn btn-success">
            Ver lista de favoritos
          </button>
          <Link to={"agregar"} className="mt-3 btn btn-warning">
            Añadir videojuego
          </Link>
        </div>
      </div>
      {mostrarFavorito && (
        <Favoritos
          favoritos={listaFavoritos}
          mostrarFavoritos={mostrarFavoritosClick}
        />
      )}

      <div className="row">
        {videojuegos.map(videojuego => (
          <div className="col d-flex justify-content-center">
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={videojuego.url_imagen}
                alt="Card image cap"
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">{videojuego.nombre}</h5>
                <p className="card-text">
                  {`${videojuego.plataforma}`.toUpperCase()}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-info"
                    onClick={() => mostrarDetallesClick(videojuego)}
                    style={{
                      display:
                        videojuegoSeleccionado &&
                        videojuegoSeleccionado.id === videojuego.id
                          ? "none"
                          : "block",
                    }}
                  >
                    Ver detalles
                  </button>

                  {listaFavoritos.some(
                    favorito => favorito.id === videojuego.id
                  ) ? (
                    <button
                      className="btn"
                      title="Eliminar de favoritos"
                      onClick={() => eliminarFavoritosClick(videojuego.id)}
                    >
                      <img
                        width={30}
                        height={30}
                        src={removeFavoriteIcon}
                        alt="Eliminar de favoritos"
                      />
                    </button>
                  ) : (
                    <button
                      className="btn"
                      title="Agregar a favoritos"
                      onClick={() => agregarFavoritosClick(videojuego)}
                    >
                      <img
                        width={30}
                        height={30}
                        src={addFavoriteIcon}
                        alt="Agregar a favoritos"
                      />
                    </button>
                  )}
                </div>
                {videojuegoSeleccionado &&
                  videojuegoSeleccionado.id === videojuego.id && (
                    <ul className="list-unstyled mt-3">
                      <li>
                        <span className="fw-bold">Fecha de lanzamiento:</span>{" "}
                        {new Date(
                          videojuego.fecha_lanzamiento
                        ).toLocaleDateString()}
                      </li>
                      <li>
                        <span className="fw-bold">Precio:</span>{" "}
                        {videojuego.precio}
                      </li>
                    </ul>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Videojuegos;
