const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" id="about">
        <div className="footer__inner">
          <div className="footer__block">
            <h4 className="footer__title">Расположение</h4>
            <address className="footer__address">
              <div>Беларусь, г Минск</div>
              <div>пр-т Независимости 98</div>
            </address>
          </div>
          <div className="footer__block">
            <h4 className="footer__title">Наблюдайте за нами</h4>
            <div className="social social--footer">
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
          <div className="footer__block">
            <h4 className="footer__title">О приюте</h4>
            <div className="footer__text">
              <p>
                У нас работают профессиональные сотрудники и волонтеры, которые
                заботятся о животных и делают все возможное, чтобы обеспечить им
                комфортные условия проживания.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright__text">
            <div>2023 "Счастье не за горами"</div>
            <div>
              Made <span>by Hanna Kuzniatsova</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
