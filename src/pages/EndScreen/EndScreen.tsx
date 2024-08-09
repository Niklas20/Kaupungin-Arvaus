import { useNavigate } from "react-router-dom";
import "./EndScreen.css";

const EndScreen = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/game");
    }

    return (
        <div className="screen end-screen">
            <h1 className="end-screen-title">Pelin Loppu</h1>
            <button 
                className="end-screen-restart-button"
                onClick={handleButtonClick}
            >
                Aloita Uudestaan
            </button>
        </div>
    )
}

export default EndScreen;