import React from 'react';
import './App.css';
import Header from './components/Headers';
import SessoinFirst from './components/SessionFirst';
import SessionSecondText from './components/SessionSecondText';
import Card from './components/SessionSecondCard';
import imagesAll from './assets/img/cursor.png';
import imagesShield from './assets/img/save.png';
import imagesPuzzle from './assets/img/puzzle.png';
import imagesHeart from './assets/img/heart.png';
import SessionThird from './components/SessionThird';
import SessionFour from './components/SessionFour';
import SessionFive from './components/SessionFive';
import SessionSix from './components/SessionSix';
import crayanFirst from './assets/img/crayon.png';
import fullscreen from './assets/img/fullscreen.png';
import ChatFirst from './assets/img/chatFirst.png';
import raindrop from './assets/img/raindrop.png';
import SessionEight from './components/SessionEight';
import SessionNine from './components/SessionNine';
import star from "./assets/img/star.png"
import shield from "./assets/img/shield.png"
import cubes from "./assets/img/cubes.png"
import computing from "./assets/img/computing.png"

function App() {
  return (
    <>
      <Header />
      <SessoinFirst />
      <SessionSecondText />
      <div className="card-second-session-papa">
        {' '}
        <Card
          imagesAll={imagesAll}
          text="Снимок и запись
        экрана в 1 клик"
        />
        <Card
          imagesAll={imagesShield}
          text="Моментальная
        ссылка на файл"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
        <Card
          imagesAll={imagesPuzzle}
          text="Удобный
        редактор снимков"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
        <Card
          imagesAll={imagesHeart}
          text="Бесплатно
        и без регистрации"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
      </div>
      <SessionThird />
      <SessionFour />
      <SessionFive />
      <SessionSix />
      <div className="session-seven-papa">
        <Card
          imagesAll={crayanFirst}
          text="Выбирайте цвет
          и рисуйте карандашом"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
        <Card
          imagesAll={fullscreen}
          text="Используйте стрелку,
          круг или квадрат
          для выделения"
        />
        <Card
          imagesAll={ChatFirst}
          text="Оставляйте комментарии"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
        <Card
          imagesAll={raindrop}
          text="Размывайте необходимую область"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
      </div>
      <SessionEight />
      <SessionNine />
      <div className='session-nine'>
      <Card
          imagesAll={star}
          text="Без регистрации:
          не нужно вводить
          никаких
          данных"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
      <Card
          imagesAll={shield}
          text="Бесплатно,
          без скрытых платежей
          и комиссий"
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
             <Card
          imagesAll={cubes}
          text="Неограниченное
          количество скриншотов
          и записей"
        />
           <Card
          imagesAll={computing}
          text="Файлы хранятся
          в течение 1 года — вы
          можете удалить их
          
          "
          backgroundColor="#FFFFFF"
          textColor="#131313"
          shadow="0px 18px 45px -10px rgba(0, 0, 0, 0.13)"
        />
      </div>
    </>
  );
}

export default App;
