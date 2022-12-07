import "./filmpage.css";
import Preview from "../../components/preview/preview";
import TextImageBlock from "../../components/text-image-block/text-image-block";
import preview from "./images/Preview.png";
import image1 from "./images/ImageBlock1.png";
import image2 from "./images/ImageBlock2.png";
import {Button} from "react-bootstrap";


function Filmpage ({type}) {
    return(
        <div className="filmpage">
            <Preview preview={preview} caption="Unity для фильмов" description="Бесплатный движок Unity обладает всем необходимым для создания фильмов."/>
            <div className="filmpage-caption">Создавайте. Улучшайте. Сотрудничайте.
                В реальном времени.</div>
            <TextImageBlock positionImage="right" caption="Больше творческой работы" description="Платформа реального времени Unity дает беспрецедентную творческую свободу по сравнению с традиционными процессами рендеринга. Воплощая свои идеи с максимальной скоростью, без многочасового или даже многодневного ожидания готовых рендеров, вы ломаете барьеры на пути к творческой свободе."
                            link={image1}/>
            <TextImageBlock positionImage="left" caption="Ускоренное производство" description="Благодаря общим композициям, ускоренному рендерингу и множеству возможностей автоматизации рутинных операций Unity дает возможность ставить кадры, строить сцены или даже целые серии за несколько дней, а не месяцев."
                            link={image2}/>
            <div className="text-block">
                <div className="text-block-caption">Удобство командной работы</div>
                <div className="text-block-description">Unity упрощает работу художникам на каждом этапе благодаря возможности синхронизировать проект и мгновенно видеть изменения. Изменения отображаются у всех участников, снижая риск возникновения ошибок и недопониманий.</div>
            </div>
            <Button href="https://unity.com/ru/solutions/film-animation-cinematics">Подробнее</Button>
        </div>
    );
}
//TODO: Сделать кнопку на 2 типа ссылок (на мой сайт через Link и на внешние)
export default Filmpage;