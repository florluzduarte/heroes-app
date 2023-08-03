//Components
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <div className="mt-3">
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
