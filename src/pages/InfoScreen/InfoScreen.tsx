import "./InfoScreen.css";

const InfoScreen = () => {
    return (
        <div className="screen info-screen">
            <h1 className="info-screen-title">Ohjeet</h1>
            <p className="info-screen-text-1">Tervetuloa pelaamaan kaupungin arvaus peliä!</p>
            <button className="info-screen-button">Aloita peli</button>
        </div>
    )
}

export default InfoScreen;