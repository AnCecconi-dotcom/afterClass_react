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
                    <div className="card text-center" width={18}>
                        <img src={Banner1} className="card-img-top" alt="Pileta de Cheddar" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">¡Probá la Pileta de Cheddar, che!</h5>
                            <p className="card-text py-2 fs-6">Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                            <a href="#" className="btn btn-warning">Chequeala acá</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                    <div className="card text-center" width={18}>
                        <img src={Banner2} className="card-img-top" alt="Bacon CHeddar McMelt" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">¡Nueva Bacon Cheddar McMelt!</h5>
                            <p className="card-text py-2 fs-6">Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                            <a href="#" className="btn btn-warning">Chequeala acá</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-4">
                <div className="col-md-6 d-flex flex-row">
                    <div className="card text-center" width={18}>
                        <img src={Banner3} className="card-img-top" alt="Grand Tasty Spicy" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">¡Nueva Grand Tasty Spicy!</h5>
                            <p className="card-text py-2 fs-6">#SePicó todo en McDonald’s. La nueva Grand Tasty Spicy tiene una salsita con el picante justo que seguro te va a encantar. Ya podés probarla en todos los locales.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                    <div className="card text-center" width={18}>
                        <img src={Banner4} className="card-img-top" alt="McFlurry Chocotorta" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">¡Nuevo McFlurry Chocotorta!</h5>
                            <p className="card-text py-2 fs-6">Llegó a McDonald's el nuevo McFlurry Chocotorta, con un sabor argentino único. Afuera no lo entenderían.</p>
                            <a href="#" className="btn btn-warning">Chequealo acá</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-md-6 d-flex flex-row">
                    <div className="card text-center" width={18}>
                        <img src={Banner5} className="card-img-top" alt="McDonald's Land" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">McDonald's llegó a Roblox</h5>
                            <p className="card-text py-2 fs-6">¡Encontrá un nuevo mundo de diversión en McDonald’s Land!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row-reverse">
                    <div className="card text-center" width={18}>
                        <img src={Banner6} className="card-img-top" alt="McCafe" />
                        <div className="card-body m-5 py-2 px-0">
                            <h5 className="card-title py-2 fs-2">McCafé Directo al Grano</h5>
                            <p className="card-text py-2 fs-6">Simple y rico. Dejá de dar vueltas y andá Directo al Grano conociendo más de McCafé.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cards;