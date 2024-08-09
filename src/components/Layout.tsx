import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const handleExitButtonClick = () => {
        navigate("/");
    }

    const handleInfoButtonClick = () => {
        navigate("/");
    }

    const handleMotiveButtonClick = () => {
        navigate("/");
    }

    return (
        <div className="layout-container">
            <Outlet />
            <div className="buttons-container">
                <button className="exit-button" onClick={handleExitButtonClick}>Exit</button>
                <button className="info-button" onClick={handleInfoButtonClick}>Help</button>
                <button className="motive-button" onClick={handleMotiveButtonClick}>Motive</button>
            </div>
        </div>
    );
}

export default Layout;
