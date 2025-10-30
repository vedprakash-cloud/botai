import { Link } from "react-router-dom";

export default function NavBar() {
  
  return (
    <Link
    to='/home'>
    <header>
      <h1 className="cursor-pointer">
        Bot AI
      </h1>
    </header>
    </Link>
  );
}
