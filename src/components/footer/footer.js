import "./footer.css"

function Footer () {
    return(
        <footer className="footer">
            <div className="inner-footer">
                <div className="inner-footer-contacts">
                    <div className="developer">Разработчик:</div>
                    <div className="developer-name">Дронтусов Виктор Евгеньевич</div>
                    <div className="git">GitHub:</div>
                    <a className="git-link" href="https://github.com/lvapl">https://github.com/lvapl</a>
                </div>
                <div className="footer-copyright">CommUnity 2022</div>
            </div>
        </footer>
    );
}

export default Footer;