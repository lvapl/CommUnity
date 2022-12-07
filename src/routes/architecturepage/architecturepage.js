import "./architecturepage.css";
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import Card from "../../components/card/card";

function Architecturepage () {
    return(
        <div className="architecturepage">
            <Preview preview={preview} caption="Unity для архитектурных решений" description="Unity: от идеи до реальности"/>
            <div className="companies">
                <div className="companies-caption">Unity доверяют тысячи лидеров и новаторов отрасли</div>
                <div className="companies-block">
                    <div className="companies-card">
                        <div className="companies-block-caption">Aurecon</div>
                        <div className="companies-block-description">«Unity дает нам гибкость и возможность полностью изменить подход к визуализации, особенно там, где платформа вписывается в жизненный цикл проекта. А вписывается она во все аспекты».</div>
                    </div>
                    <div className="companies-card">
                        <div className="companies-block-caption">HGA</div>
                        <div className="companies-block-description">«Unity Reflect упрощает нам работу и облегчает восприятие крупных проектов нашими клиентами и сотрудниками».</div>
                    </div>
                </div>
            </div>
            <div className="solutions">
                <div className="solutions-caption">РЕШЕНИЯ ОТ UNITY</div>
                <div className="solutions-cards">
                    <Card caption="Unity Reflect" description="Набор продуктов, который поможет вам сделать данные BIM доступнее для всех участников на всех этапах проектирования и строительства в единой иммерсивной платформе реального времени."
                          buttonName="Подробнее"/>
                    <Card caption="VisualLive" description="VisualLive позволяет визуализировать масштабные проекты BIM и CAD прямо на строительной площадке с использованием технологии дополненной реальности, что позволяет строителям-профессионалам работать совместно в режиме реального времени."
                          buttonName="Подробнее"/>
                    <Card caption="Unity Industrial Collection" description="Эта коллекция предлагает лучшее в своем классе ПО и техническую поддержку для импорта, оптимизации и визуализации трехмерных данных в Unity. Создавайте и развертывайте 3D-, AR- и VR-приложения для нужных вам платформ."
                          buttonName="Подробнее"/>
                </div>
            </div>
        </div>
    );
}

export default Architecturepage;