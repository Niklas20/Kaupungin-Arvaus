import { useState } from "react";
import { City } from "../../types";
import "./SearchBarWithPills.css";

interface SearchBarWithPillsProps {
    placeholder: string;
    cityData: City[];
    onCitySelect?: (city: string) => void;
    className?: string;
}

const SearchBarWithPills = (props: SearchBarWithPillsProps) => {
    const [search, setSearch] = useState("");

    const handlePillClick = (city: string) => {
        if (props.onCitySelect) {
            props.onCitySelect(city);
        }
    }

    const options = props.cityData
        .filter((city) => city.name.toLowerCase().includes(search.toLowerCase()))
        .map((city) => (
            <div
                key={city.name}
                className="pill"
                onClick={() => handlePillClick(city.name)}
            >
                {city.name}
            </div>
        ));

    return (
        <div className={props.className}>
            <input
                type="text"
                placeholder={props.placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="options">
                {options.length > 0 ? options : <div className="no-results">No results found</div>}
            </div>
        </div>
    )
}

export default SearchBarWithPills;