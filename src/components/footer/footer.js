import "./footer.css"
import {Link} from "react-router-dom";

function Footer () {
    return(
        <footer className="footer">
            <div className="inner-footer">
                <Link className="footer-user-agreements" to="">Пользовательские соглашения</Link>
                <div className="footer-copyright">CommUnity 2022</div>
            </div>
        </footer>
    );
}

export default Footer;