//Libraries
import { useMemo } from "react";
import PropTypes from "prop-types";

//Components
import { HeroCard } from "./";

//Helpers
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
