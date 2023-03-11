import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pets = () => {
  const [allPets, setAllpets] = useState([]);

  const getAllPets = async () => {
    const response = await fetch("http://localhost:3333/all-pets");

    setAllpets(await response.json());
  };

  useEffect(() => {
    getAllPets();
  }, []);

  return (
    <div className="pets" id="pet_m">
      {allPets.length > 0 ? (
        allPets.map((pet) => {
          return (
            <Link className="pets__item" key={pet._id} to={`/pets/${pet._id}`}>
              <img className="pets_img" src={pet.image} alt={pet.name} />
              <div className="pets__content">
                <div className="pets__title">{pet.name}</div>
                <div className="pets__text">{pet.text}</div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="no-pets">
          На данный момент нет питомцев... и мы счастливы!
        </div>
      )}
    </div>
  );
};

export default Pets;
