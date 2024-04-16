import React from "react";
import gif from "./../assets/img/gif.png"
import Ellipse from "./../assets/img/Ellipse.png"
import Glossy from "./../assets/img/Glossy.png"

const SessionFour = () => {
  return (
    <>
      <div className="session-four-papa">
        <div className="session-four-text">
          <h2>В один клик</h2>
          <p>
            <span>Не нужно запоминать комбинации клавиш</span> <br />
            на клавиатуре, чтобы сделать скриншот или начать <br /> записывать
            видео с экрана. <br /> <br />
            Просто нажмите две кнопки мыши <br />
            или настройте горячую кнопку на любую удобную <br /> клавишу
          </p>
        </div>
        <div>
            <div className="session-four-gif"><img src={gif} alt="img" /></div>
            <div className="session-four-ellipse"><img src={Ellipse} alt="img" /></div>
            <div className="session-four-glossy"><img src={Glossy} alt="img" /></div>
        </div>
      </div>
    </>
  );
};

export default SessionFour;
