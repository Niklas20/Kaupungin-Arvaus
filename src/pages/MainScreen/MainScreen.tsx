import { useNavigate } from "react-router-dom";
import "./MainScreen.css";

const MainMenu = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/info");
    }

    return (
        <div className="screen main-screen">
            <h1 className="main-screen-title">Kaupungin Arvaus Peli</h1>
            <button
                className="main-screen-button"
                onClick={handleButtonClick}
            >
                Aloita peli
            </button>
        </div>
    )
}

export default MainMenu;