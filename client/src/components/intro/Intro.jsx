const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 id="for__intro" className="intro__title">
            Счастье не за горами
            <div className="intro__mintitle">Приют для животных</div>
          </h1>
          <h2 className="intro__subtitle">
            Вы можете взять любого пушистика, из нашего приюта, или помочь любым
            доступным для вас способом (еда, волонтерство, принадлежности для
            животных, пожертвование).
          </h2>
          <a className="btn btn--red" href="#help">
            Хочу помочь
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
