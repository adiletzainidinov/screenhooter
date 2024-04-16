import SessionFiveGif from '../assets/img/gif.png';
import Restangletwo from '../assets/img/Rectangle27.png';
import EllipseSecond from '../assets/img/EllipseSecond.png';
import GrossySecond from '../assets/img/ColorWhiteGlossy.png';

const SessionFive = () => {
  return (
    <>
      <div className='session-five-papa'>
        <div>
          <div className='session-five-gif'>
            <img src={SessionFiveGif} alt="img" />
          </div>
          <div className='restangletwo'>
            <img src={Restangletwo} alt="img" />{' '}
            <p>
              <span>Файлы хранятся в течение 1 года</span> с момента <br />
              создания. Можно их удалять самостоятельно. <br />
              В истории программы доступны <br />
              последние 5 скриншотов
            </p>
          </div>
          <div className='ellipse-second'>
            <img src={EllipseSecond} alt="img" />
          </div>
          <div className='grossy-second'>
            <img src={GrossySecond} alt="img" />
          </div>
        </div>

        <div className='session-five'>
            <h2>Мгновенная ссылка</h2>
            <p>Мгновенное получение ссылки на снимок <br />
или видео. Вы только нажали Enter, а ссылка уже <br />
в буфере обмена. Перейдя по ссылке, можно будет <br /> посмотреть ваш снимок или записанное видео</p>
        </div>
      </div>
    </>
  );
};

export default SessionFive;
