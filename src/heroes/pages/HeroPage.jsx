//Libraries
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

//Helpers
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const params = useParams();
  const hero = useMemo(() => getHeroById(params.id), [params.id]);

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    // hero.publisher === "Marvel Comics" ? navigate("/marvel") : navigate("/dc");
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">Alterego: </span>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Publisher: </span>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">First Appearance: </span>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleNavigateBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
