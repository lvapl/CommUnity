import "./header.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="inner-header">
                <i className="logo">CommUnity</i>
                <div className="navigation-panel">
                    <Link to="/"><button className="navigation-button">Подробнее об Unity</button></Link>
                    <Link to="/history"><button className="navigation-button">Доп. инструменты</button></Link>
                    <button className="navigation-button">Обучение</button>
                    <button className="navigation-button">Сообщество</button>
                </div>
                <i className="profile">Profile</i>
            </div>
        </div>
    );
}

export default Header;