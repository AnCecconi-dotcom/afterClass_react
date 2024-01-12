import Banner1 from "../assets/PiletaCheddar-Banner.png";
import Banner2 from "../assets/BaconCheddarMcMelt-Banner.png";
import Banner3 from "../assets/GrandTastySpicy-Banner.png";
import Banner4 from "../assets/McFlurry-Banner.png";
import Banner5 from "../assets/ComboPixel-Banner.png";
import Banner6 from "../assets/McCafe-Banner.png";


const Cards = () => {
    return (
        <div className="container">
            <div className="row mt-4 py-4">
                <div className="col-md-6 d-flex flex-row">
                    <div className="card" width= {18}>
                        <img src={Banner1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                <div className="card" width= {18}>
                        <img src={Banner2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>

            <div className="row py-4">
                <div className="col-md-6 d-flex flex-row">
                    <div className="card" width= {18}>
                        <img src={Banner3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                <div className="card" width= {18}>
                        <img src={Banner4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-md-6 d-flex flex-row">
                    <div className="card" width= {18}>
                        <img src={Banner5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                <div className="card" width= {18}>
                        <img src={Banner6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cards;