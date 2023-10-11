const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link ms-5" href="#">
              Inicio <span className="sr-only">(actual)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Consolas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Videojuegos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accesorios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
