import Router from "./Router"
import "./App.css"
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

    const handleExitButtonClick = () => {
        navigate("/")
    }

    const handleInfoButtonClick = () => {
        navigate("/")
    }

    const handleHelpButtonClick = () => {
      navigate("/")
    }

  return (
    <>
      <div className="container">
        <Router />

        <button
          className="exit-button"
          onClick={handleExitButtonClick}
        > Exit
        </button>

        <button
          className="info-button"
          onClick={handleInfoButtonClick}
        > Info
        </button>

        <button
          className="help-button"
          onClick={handleHelpButtonClick}
        > Help
        </button>

      </div>
    </>
  )
}

export default App
