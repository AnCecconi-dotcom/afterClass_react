import Banner1 from "../assets/PiletaCheddar-Banner.png";
import Banner2 from "../assets/BaconCheddarMcMelt-Banner.png";
import Banner3 from "../assets/GrandTastySpicy-Banner.png";
import Banner4 from "../assets/McFlurry-Banner.png";

const Carrousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="Banner Bacon McMelt" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="Banner Bacon McMelt" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="Banner Grand Tasty Spicy" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner4} className="d-block w-100" alt="Banner McFlurry ChocolinasName" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
};

export default Carrousel;