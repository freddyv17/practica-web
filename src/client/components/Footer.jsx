const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Freddy'Consolas
                </h6>
                <p>
                  El mejor lugar para encontrar tus consolas favoritas, al mejor
                  precio y con las mejores cuotas del mercado.{" "}
                  <b>¡Te esperamos!</b>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    PlayStations
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Xbox
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nintendo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Videojuegos
                  </a>
                </p>
              </div>

              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div> */}

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <i className="fas fa-home me-3"></i> León, Avenida Palacios,
                  Nicaragua
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  freddyconsolas@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +505 12345678
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +505 87654321
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:{"  "}
          <a className="text-reset fw-bold" href="">
            FreddyConsolas
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
