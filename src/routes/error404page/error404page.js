import "./error404page.css";
import warning from "./images/Warning.jpg";

function Error404page () {
    return(
        <div className="error-404">
            <img className="warning" src={warning} alt=""/>
            <div className="error-404-caption">Не найдено! Ошибка 404</div>
            <div className="error-404-description">Эта страница не доступна.<br/>Возможно, в поисках вам помогут ссылки в верхнем меню.</div>
        </div>
    );
}

export default Error404page;