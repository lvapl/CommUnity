import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="inner-header">
                <i className="logo">CommUnity</i>
                <div className="navigation-panel">
                    <button className="navigation-button">Подробнее об Unity</button>
                    <button className="navigation-button">Доп. инструменты</button>
                    <button className="navigation-button">Обучение</button>
                    <button className="navigation-button">Сообщество</button>
                </div>
                <i className="profile">Profile</i>
            </div>
        </div>
    );
}

export default Header;