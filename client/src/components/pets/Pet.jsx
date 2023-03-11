import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Pet = () => {
  const [pet, setPet] = useState([]);
  const { petId } = useParams();

  const getPet = async () => {
    const response = await fetch(`http://localhost:3333/pet/${petId}`);

    setPet(await response.json());
  };

  useEffect(() => {
    getPet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petId]);

  return (
    <div className="animal">
      <div className="container" id="animal">
        <div className="animal__item">
          <div className="animal__photo">
            <img className="animal__img" src={pet.image} alt={pet.name} />
          </div>
          <div className="animal__content">
            <div className="animal__title">{pet.name}</div>
            <div className="animal__text">{pet.text}</div>
            <div className="animal__location">{pet.location}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <HashLink to="/#pet_m">Назад</HashLink>
              <HashLink
                to="/#help"
                style={{ width: 300 }}
                className="btn btn--red"
              >
                Хочу забрать
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
