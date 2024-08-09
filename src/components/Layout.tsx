import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './Button/Button';
import exitButtonImage from "../imgs/exitButton.png";
import infoButtonImage from "../imgs/infoButton.png";
import motiveButtonImage from "../imgs/motiveButton.png";

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

                <Button 
                    className='info-button'
                    image={infoButtonImage}
                    text='Info'
                    onClick={handleInfoButtonClick}
                />

                <Button 
                    className='motive-button'
                    image={motiveButtonImage}
                    text='Mtive'
                    onClick={handleMotiveButtonClick}
                />
            </div>
        </div>
    );
}

export default Layout;
