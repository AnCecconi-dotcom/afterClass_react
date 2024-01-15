import PreFooter from "./PreFooter";
import LogoFacebook from "../assets/facebook.png";
import LogoInstagram from "../assets/instagram.png";
import LogoX from "../assets/x.png";
import LogoYoutube from "../assets/youtube.png";
import GooglePLay from "../assets/googlePLay.png";
import AppStore from "../assets/appStore.png";
import LogoMcDonalds from "../assets/mcdonalds-logo-footer-bg-white.png";

const Footer = () => {
    return (
        <>
            <div className="bg-white py-5">
                <PreFooter />
                <div className="bg-white py-5">
                    <div className="container-fliud">
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <div className="col-md-4 text-center pe-5">
                                    <a className=" ps-5 pe-3" href=""><img src={LogoFacebook} alt="facebook" width={30} /></a>
                                    <a className="px-3" href=""><img src={LogoInstagram} alt="instagram" width={30} /></a>
                                    <a className="px-3" href=""><img src={LogoX} alt="x" width={30} /></a>
                                    <a className="px-3" href=""><img src={LogoYoutube} alt="youtube" width={30} /></a>
                                </div>
                                <div className="col-md-6 text-end pe-4">
                                    <a className="px-2" href=""><img src={GooglePLay} alt="google play" width={130} /></a>
                                    <a className="px-2" href=""><img src={AppStore} alt="app store" width={130} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link ps-5" href="#">Politica de Privacidad</a>
                                </li>
                                <li class="nav-item ps-5">
                                    <a class="nav-link" href="#">Defensa al Consumidor</a>
                                </li>
                                <li class="nav-item ps-5">
                                    <a class="nav-link" href="#">Proteccion de Datos Personales </a>
                                </li>
                                <li class="nav-item ps-5">
                                    <a class="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                    </div>
                    <a class="navbar-brand fw-lighter fs-6" href="#"><img src={LogoMcDonalds} alt="logo mcdonalds amarillo" width={50} /> © McDonald's 2024</a>
                </nav>
            </div>
        </>
    )
};

export default Footer;
