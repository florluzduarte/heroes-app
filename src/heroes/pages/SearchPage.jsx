//Libraries
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

//Components
// import { HeroCard } from "../components";

//Hooks
import { useForm } from "../../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, handleFormChange, handleFormReset } = useForm({
    searchText: "",
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    handleFormReset();
  };

  return (
    <div className="mt-3">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleFormChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a Hero</div>
          <div className="alert alert-danger">
            No hero with <span className="fw-bold">{q}</span>
          </div>
          {/* <HeroCard /> */}
        </div>
      </div>
    </div>
  );
};
