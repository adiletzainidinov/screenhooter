import preview from "./../assets/img/preview.png"
import line from "./../assets/img/DecorativeLine.png"

const SessoinFirst = () => {
  return (
    <>
  <div className="session-first-papa" >
  <div className="session-first-left">
        <h1>
          Делайте снимки <br /> и записывайте экран <br /> <span>в 1клик</span>
        </h1>
        <p>
          Вместе со Screenshoter можно в один клик сделать снимок или записать
          происходящее на экране ПК, чтобы поделиться с кем угодно
        </p>
        <button>Скачать бесплатно</button>
        <h5> &#8595;</h5>
      </div>
      <div className="session-first-right">
        <img src={preview} alt="" />
        <div className="gradient" ></div>
        <div className="session-first-button"><button>Бесплатная программа <br /> для Windows</button></div>
      <div className="img-line"><img src={line} alt="img" /></div>

      </div>
  </div>
    </>
  );
};

export default SessoinFirst;
