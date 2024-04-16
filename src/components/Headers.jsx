const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <div>
            <p className="screenshooter">Screenshoter +</p>
            <p className="header-screen">Скриншот и запись экрана в 1 клик</p>
          </div>
        </div>
        <ul className="header-nav">
          <li>Функции</li>
          <li>Преимущества</li>
          <li>Как использовать</li>
          <li>Частые вопросы</li>
          <li>
            <select className="header-select">
              <option value="ru" className="header-option">RU</option>
              <option>ENG</option>
            </select>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
