import "./historypage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import TextImageBlock from "../../components/text-image-block/text-image-block";
import image1 from "./images/FirstVersionUnity.png"
import image2 from "./images/SecondVersionUnity.png"
import image3 from "./images/ThirdVersionUnity.png"
import MiniBlockNews from "../../components/mini-block-news/mini-block-news";

function Historypage () {
    return(
        <div className="historypage">
            <Preview preview={preview} caption="" description=""/>
            <TextImageBlock positionImage="left" caption="Начало пути" description="Первая версия Unity появилась в 2005 году, когда игровой движок был анонсирован на Worldwide Developers Conference. Целью было создание доступного любительского движка с удобным графическим интерфейсом. Изначально Unity работал только под macOS, однако уже в августе 2005 в версии 1.1 появилась возможность сборки игр под Windows и поддержка плагинов C/C++."
                            link={image1}/>
            <TextImageBlock positionImage="right" caption="Вторая версия движка" description="В октябре 2007 команда разработчиков выпустила вторую версию движка. Основные изменения — добавление полноценной среды разработки под Windows (в версии 2.5, март 2008) , улучшенный веб-плеер,  а так же увеличение скорости работы на 30%. Ещё были введены новые технологии (поддержка веб-стриминга, мягких теней реального времени) и полностью переработан GUI."
                            link={image2}/>
            <TextImageBlock positionImage="down" caption="Unity 3D 4" description="Новая версия вышла в ноябре 2012. Из основных изменений — движок научился работать под Linux. Так же была добавлена поддержка API DirectX 11, улучшена система анимации (добавлен скиннинг на GPU) и освещения. Следующий глобальный релиз, Unity 4.3, вышел через год, в ноябре 2013: введена поддержка 2D-спрайтов и интегрирован физический движок Box2D. Так же создатели Unity сделали жизнь разработчикам мобильных игр проще — теперь есть возможность собирать игры для iOS в версии движка для Windows. Одной из самых красивых игр на Unity 4 является пошаговая стратегия Endless Space"
                            link={image3}/>
            <MiniBlockNews/>
        </div>
    );
}

export default Historypage;