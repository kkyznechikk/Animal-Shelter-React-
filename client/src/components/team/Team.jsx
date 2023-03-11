const Team = () => {
  return (
    <div className="team">
      <div className="container" id="team">
        <div className="team__inner">
          <div className="team__item">
            <img className="team__photo" src="img/team1.png" alt="" />
            <div className="team__name">Иван</div>
            <div className="team__prof">Минск</div>
            <div className="team__text">
              <p>
                Опытный дрессировщик, который занимается социализацией и
                тренировкой собак, чтобы они могли быть успешно усыновлены.
              </p>
            </div>
            <div className="social">
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#linkedin"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="team__item">
            <img className="team__photo" src="img/team2.png" alt="" />
            <div className="team__name">Мария</div>
            <div className="team__prof">Брест</div>
            <div className="team__text">
              <p>
                Волонтер, который занимается сбором пожертвований и организацией
                благотворительных мероприятий для поддержки работы приюта.
              </p>
            </div>
            <div className="social">
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#linkedin"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="team__item">
            <img className="team__photo" src="img/team3.png" alt="" />
            <div className="team__name">Владимир</div>
            <div className="team__prof">Минск</div>
            <div className="team__text">
              <p>
                Работает с котами, убирает их лотки, кормит и играет с ними,
                чтобы они были здоровы и счастливы.
              </p>
            </div>
            <div className="social">
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#linkedin"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="team__item">
            <img className="team__photo" src="img/team4.png" alt="" />
            <div className="team__name">Анна</div>
            <div className="team__prof">Гомель</div>
            <div className="team__text">
              <p>
                Студентка ветеринарной медицины, которая помогает с осмотром и
                уходом за животными в приюте.
              </p>
            </div>
            <div className="social">
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
              <a className="social__item" href="" target="blank">
                <svg className="social__icon">
                  <use xlinkHref="#linkedin"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
