import SearchBarWithPills from "../../components/SearchBarWithPills/SearchBarWithPills";
import CityData from "../../data/Cities.json";
import "./GameScreen.css";

const GameScreen = () => {
    return (
        <div className="screen game-screen">
            <SearchBarWithPills className="game-screen-search-bar" placeholder="Search for city..." cityData={CityData.cities} />
        </div>
    );
}

export default GameScreen;