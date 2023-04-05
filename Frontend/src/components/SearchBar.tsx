import { useDispatch } from "react-redux";
import IconSearch from "../icons/IconSearch";

const SearchBar = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="text"
          name="table-search"
          onChange={(event: any) => dispatch(props.search(event.target.value))}
          className="search_bar"
          placeholder={`Search for ${props.name}`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
