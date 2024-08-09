import { useNavigate } from "react-router-dom";
import "./InfoScreen.css";

const InfoScreen = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/game");
    }

    return (
        <div className="screen info-screen">
            <h1 className="info-screen-title">Ohjeet</h1>
            <p className="info-screen-text-1">Tervetuloa pelaamaan kaupungin arvaus peliä!</p>
            <button
                className="info-screen-button"
                onClick={handleButtonClick}
            >
                Aloita peli
            </button>
        </div>
    )
}

export default InfoScreen;