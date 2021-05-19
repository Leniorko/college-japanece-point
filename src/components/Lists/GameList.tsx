import "./GameList.css";

// TODO There is an erro in Library.tsx fix it.
// TODO Make it wrap in mobile

interface GameListProps {
  games: any;
}

// TODO Make list actual list
export default function GameListComponent(props: GameListProps) {
  return <div className="game-list">{props.games}</div>;
}
