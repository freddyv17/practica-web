import { Link } from "react-router-dom";

const Tarjetas = ({ cards_content }) => {
  return (
    <div className="container">
      <div className="row">
        {cards_content.map(card => (
          <div className="col d-flex justify-content-center">
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={card.photo_url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.description}</p>
                <Link to={card.url} className={`btn ${card.btn_color}`}>
                  Ver {card.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tarjetas;
