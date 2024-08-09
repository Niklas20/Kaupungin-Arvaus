import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './Button/Button';
import exitButtonImage from "../imgs/exitButton.png";

const Layout = () => {
    const navigate = useNavigate();

    const handleExitButtonClick = () => {
        navigate("");
    }

    const handleInfoButtonClick = () => {
        navigate("/info");
    }

    const handleMotiveButtonClick = () => {
        navigate("/motive");
    }

    return (
        <div className="layout-container">
            <Outlet />
            <div className="buttons-container">
                <Button
                    className='exit-button'
                    image={exitButtonImage}
                    text='Exit'
                    onClick={handleExitButtonClick}
                />
            </div>
        </div>
    );
}

export default Layout;
