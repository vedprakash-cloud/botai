import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    
    const handleCLick = ()=>{
        navigate('/')
    }
    return (
        <h1
        onClick={handleCLick}>
            Bot AI
        </h1>
    )
}