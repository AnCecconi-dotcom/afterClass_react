import BtnDescarga from "./BtnDescarga";
import BtnPedi from "./BtnPedi";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="bg-white sticky-top border-bottom border-2">
            <div className="row">
                <div className="col-md-2 text-end">
                    <Logo />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <NavBar />
                </div>
                <div className="col-md-3 txt-end d-flex align-items-center">
                    <BtnDescarga />
                    <BtnPedi />
                </div>
            </div>
        </div>
    )
};

export default Header;