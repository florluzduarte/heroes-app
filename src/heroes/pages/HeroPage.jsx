//Libraries
import { Navigate, useParams } from "react-router-dom";

//Helpers
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const params = useParams();
  const hero = getHeroById(params.id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <h1>Hero Page</h1>
    </>
  );
};
