const Favoritos = ({ favoritos, mostrarFavoritos }) => {
  const handleButtonClick = () => {
    mostrarFavoritos(false);
  };
  return (
    <div className="favorites-modal">
      <div className="row">
        <div className="col-11"></div>
        <div className="col-1 d-flex justify-content-end">
          <button
            type="button"
            class="btn-close"
            onClick={handleButtonClick}
          ></button>
        </div>
      </div>
      <div className="container">
        {favoritos.map(favorito => (
          <div className="d-flex my-3 align-items-center">
            <img
              src={favorito.url_imagen}
              alt=""
              className="circle-image"
              width={60}
              height={60}
            />
            <span className="fw-bold ms-3 text-truncate">
              {favorito.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favoritos;
