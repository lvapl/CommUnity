import "./filmpage.css";
import Preview from "../../components/preview/preview";
import TextImageBlock from "../../components/text-image-block/text-image-block";
import preview from "./images/Preview.png";
import image1 from "./images/ImageBlock1.png";
import image2 from "./images/ImageBlock2.png";


function Filmpage () {
    return(
        <div className="filmpage">
            <Preview preview={preview} caption="" description=""/>
            <div className="filmpage-caption">Создавайте. Улучшайте. Сотрудничайте.
                В реальном времени.</div>
            <TextImageBlock positionImage="right" caption="Больше творческой работы" description="Платформа реального времени Unity дает беспрецедентную творческую свободу по сравнению с традиционными процессами рендеринга. Воплощая свои идеи с максимальной скоростью, без многочасового или даже многодневного ожидания готовых рендеров, вы ломаете барьеры на пути к творческой свободе."
                            link={image1}/>
            <TextImageBlock positionImage="left" caption="Ускоренное производство" description="Благодаря общим композициям, ускоренному рендерингу и множеству возможностей автоматизации рутинных операций Unity дает возможность ставить кадры, строить сцены или даже целые серии за несколько дней, а не месяцев."
                            link={image2}/>
            <TextImageBlock positionImage="down" caption="Удобство командной работы" description="Unity упрощает работу художникам на каждом этапе благодаря возможности синхронизировать проект и мгновенно видеть изменения. Изменения отображаются у всех участников, снижая риск возникновения ошибок и недопониманий."
                            link=""/>
        </div>
    );
}

export default Filmpage;