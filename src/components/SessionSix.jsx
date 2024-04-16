import SessionSixGif from "./../assets/img/gif.png"
import Rectanglethird from "./../assets/img/RectangleThird.png"
import BagelSix from "../assets/img/bagelsix.png"
import LineSix from "../assets/img/linesix.png"

const SessionSix = () => {
  return (
    <>
      <div className="session-six-papa">
        <div className="session-six-text">
          <h2>И редактор снимков</h2>
          <p>
            <span>Более 5 инструментов</span> для редактирования. <br /> Выделяете область и
            редактируете. <br /> <br />
            Если неверно выбрали область — не беда, можно без <br /> проблем её
            передвинуть и/или изменить размер, <br />
            не удаляя то, что уже нарисовано!
          </p>
        </div>
        <div>
            <div className="session-six-gif"><img src={SessionSixGif} alt="img" /></div>
            <div className="session-six-rectangle"><img src={Rectanglethird} alt="img" /></div>
            <div className="session-six-bagel"><img src={BagelSix} alt="img" /></div>
            <div className="session-six-line"><img src={LineSix} alt="img" /></div>
        </div>
      </div>
    </>
  );
};

export default SessionSix;