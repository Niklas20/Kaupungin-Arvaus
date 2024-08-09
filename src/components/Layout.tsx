import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './Button/Button';

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
                    image='./imgs/exitButton.png'
                    text='Exit'
                    onClick={handleExitButtonClick}
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
}

export default Layout;
