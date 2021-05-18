import "./GameSearchbar.css";

interface SearchbarProps {
  searchbarString: string;
  setSearchString: (searchString: string) => void;
}

export default function GameSearchbarComponent(props: SearchbarProps) {
  return (
    <input
      type="text"
      name="searchString"
      id=""
      className="game-searchbar"
      placeholder="Search"
      value={props.searchbarString}
      onChange={(e) => {
        props.setSearchString(e.target.value);
      }}
    />
  );
}
