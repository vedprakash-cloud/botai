import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate("/");
  };
  return (
    <header>
      <h1 onClick={handleCLick} className="cursor-pointer">
        Bot AI
      </h1>
    </header>
  );
}
