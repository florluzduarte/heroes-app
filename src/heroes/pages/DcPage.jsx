import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <div className="mt-3">
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
