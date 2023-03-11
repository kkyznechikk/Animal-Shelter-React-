const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container" id="testimonials">
        <div className="testimonials__item">
          <div className="testimonials__photo">
            <img
              className="testimonials__img"
              src="img/testimonials_pet.png"
              alt=""
            />
          </div>
          <div className="testimonials__content">
            <div className="testimonials__text">
              “Я настоятельно рекомендую этот приют всем, кто хочет помочь
              животным или найти нового питомца для своей семьи. Спасибо вам,
              приют, за ваше благородное дело!”
            </div>
            <div className="testimonials__author">Павел, Гродно</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
