const Features = () => {
  return (
    <div className="container" id="features_m">
      <div className="features">
        <div className="features__item">
          <img className="features__icon" src="img/1f.png" alt="" />
          <h4 className="features__title">Пожертвование</h4>
          <div className="features__text">
            Анонимное пожертвование (с отчетом о вложении денежных средств).
          </div>
        </div>

        <div className="features__item">
          <img className="features__icon" src="img/2f.png" alt="" />
          <h4 className="features__title">Получим в дар</h4>
          <div className="features__text">
            Получим в дар еду или любые другие принадлежности для животных
            (иргушки, лекарства, домики и тд и тп).
          </div>
        </div>

        <div className="features__item">
          <img className="features__icon" src="img/3f.png" alt="" />
          <h4 className="features__title">Сохраняем ваше время</h4>
          <div className="features__text">
            Подберем для вас удобное время и место для помощи нам.
          </div>
        </div>

        <div className="features__item">
          <img className="features__icon" src="img/4f.png" alt="" />
          <h4 className="features__title">Волонтерство</h4>
          <div className="features__text">
            Подберем для вас любую работу, исходя из вашей специальности.
          </div>
        </div>

        <div className="features__item">
          <img className="features__icon" src="img/5f.png" alt="" />
          <h4 className="features__title">Готовы помочь</h4>
          <div className="features__text">
            Заберем сами, то что вы бы хотели отдать (если у вас нет
            возможности).
          </div>
        </div>

        <div className="features__item">
          <img className="features__icon" src="img/6f.png" alt="" />
          <h4 className="features__title">Благодарность</h4>
          <div className="features__text">Бесконечно благодарны вам.</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
