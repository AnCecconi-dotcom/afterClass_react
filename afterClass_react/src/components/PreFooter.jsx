import LogoRed from "../assets/mcdonalds-logo-bg-red.png";
import BtnDescarga from "./BtnDescarga";

const PreFooter = () => {
    return (
        <div className="container-fluid bg-warning py-4">
            <div className="row">
                <div className="col d-flex flex-row align-items-center">
                    <div className="col-md-2 text-end">
                        <img className="" src={LogoRed} alt="Logo McDonalds Rojo" width={125} />
                    </div>
                    <div className="col-md-5 text-start ps-5">
                        <h3 className="fw-bold">Descargate nuestra app!</h3>
                        <p className="fw-light">Descargáte nuestra app y no te pierdas nuestras novedades</p>
                    </div>
                    <div className="col-md-5 text-center pe-5">
                        <BtnDescarga />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PreFooter;