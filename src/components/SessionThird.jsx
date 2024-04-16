import React from 'react';
import gif from './../assets/img/gif.png';
import Rectangle from "./../assets/img/Rectangle.png"
import bagel from "./../assets/img/bagel.png"
import sessionThirdLine from "./../assets/img/sessionThirdLine.png"

const SessionThird = () => {
  return (
    <>
      <div className='session-third-papa'>
        <div>
          <div className='rectangle-img'>
        <img src={Rectangle} alt="img" />

          </div>
          <div className='gif-img'>
            <img src={gif} alt="img" />
          </div>
        </div>
        <div className='session-third-text'>
          <h2>Запись экрана</h2>
          <p>
            Недостаточно снимков? Запишите происходящее <br /> на экране со своим
            голосом или звуком системы. <br /> <br />
            <span>Достаточно нажать две кнопки мыши,</span> выделить <br /> необходимую область и
            начнется запись видео <br /> с экрана. Быстро и без сложных настроек
          </p>
          <div className='bagel-img'><img src={bagel} alt="img" /></div>
          <div className='session-third-img'><img src={sessionThirdLine} alt="img" /></div>
        </div>
      </div>
    </>
  );
};

export default SessionThird;
