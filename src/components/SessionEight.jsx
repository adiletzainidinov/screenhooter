import SuperToroid from './../assets/img/SuperToroid.png';
import Cube from '../assets/img/Cube.png';
import Cone from '../assets/img/Cone.png';
import EightLine from "./../assets/img/EightLine.png"
import ball from "./../assets/img/ball.png"
import rightBlock from "./../assets/img/rightBlock.png"

const SessionEight = () => {
  return (
    <>
      <div className="session-eight-papa">
        <div className='right-block'><img src={rightBlock} alt="img" /></div>
        <div className='eight-ball'><img src={ball} alt="img" /></div>
        <div className="screenhooter-function">
          <h2>
            <span>Screenshoter</span> - это функции <br /> на каждый день
          </h2>
        </div>
        <div className="three-div-papa">
          <div className="idea">
            <img src={SuperToroid} alt="img" />
            <div className="change-idea">
              {' '}
              <h2>01.</h2>
              <h3>
                Обмен <br />
                идеями
              </h3>
            </div>
            <p>
              Когда нужно что-то наглядно показать коллеге, исполнителю или
              заказчику — можно сделать снимок экрана и добавить к нему
              комментарий. <br /> <br />А если ситуация требует более детального
              объяснения — окей, не проблема. Screenshoter поможет записать
              видео экрана вместе с вашими голосовыми комментариями
            </p>
          </div>
          <div className="idea">
            <img src={Cube} alt="img" />
            <div className="change-idea">
              {' '}
              <h2>02.</h2>
              <h3>
                Создание <br />
                инструкций
              </h3>
            </div>
            <p>
              Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые
              инструкции, добавляя комментарии и визуальные отметки в
              необходимом месте скриншота. <br />
              <br />
              Поделиться снимком или видеозаписью можно с помощью ссылки,
              которая мгновенно появляется в буфере обмена
            </p>
          </div>
          <div className="idea">
            <img src={Cone} alt="img" />
            <div className="change-idea">
              {' '}
              <h2>03.</h2>
              <h3>
                Обратная <br />
                связь
              </h3>
            </div>
            <p>
              Если в процессе работы приложения, сайта или сервиса возникла
              ошибка, её можно моментально зафиксировать. <br /> <br />
              Отправьте скриншот в техподдержку, где будет видно, в чем именно
              заключается проблема
            </p>
          </div>
        </div>
        <div className="how-using">
          <h2>
            Как использовать <span>Screenshoter </span>
          </h2>
        </div>
        <div className="step-papa">
          <div className="step">
            <h2>Шаг 1.</h2>
            <div className="step-box session-first-left">
              <button>Скачать бесплатно</button>
            </div>
            <div className="step-p">
              <p>
                <span>Скачайте программу</span> <br />
                на свой ПК или ноутбук
              </p>
            </div>
          </div>
          <div className="step">
            <h2>Шаг 2.</h2>
            <div className="step-box session-first-left step-second">
              <p>Кадр с загрузкой программы</p>
            </div>
            <div className="step-p">
              <p>
                <span>Запустите Screenshoter:</span> <br />
                программа будет работать в фоновом режиме{' '}
              </p>
            </div>
          </div>
          <div className="step">
            <h2>Шаг 3.</h2>
            <div className="step-box session-first-left step-second">
                <p>Кадр с ярлыком программы</p>
            </div>
            <div className="step-p">
              <p>
                <span>Наслаждайтесь удобством</span> <br />
                и быстродействием
              </p>
            </div>
          </div>
        </div>
        <div className='session-first-left session-eight-button'><button>Скачать бесплатно</button></div>
        <div className='eight-line'><img src={EightLine} alt="img" /></div>
      </div>
    </>
  );
};

export default SessionEight;
