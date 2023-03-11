import { useEffect, useState } from "react";
import { Input, message, Alert } from "antd";
import "./Admin.css";

const Admin = () => {
  const isAuth = sessionStorage.getItem("auth");
  const [showLogin, setShowLogin] = useState(isAuth);
  const [loginForm, setLoginForm] = useState({ name: "", password: "" });

  const onChangeLogin = (name, event) => {
    const newForm = { ...loginForm, [name]: event.target.value };
    setLoginForm(newForm);
  };

  const login = () => {
    if ((loginForm.name === "ann", loginForm.password === "1234")) {
      sessionStorage.setItem("auth", "true");
      setShowLogin("true");
    }
    return;
  };

  const [allPets, setAllpets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    text: "",
    location: "",
    image: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (name, event) => {
    const newForm = { ...form, [name]: event.target.value };
    setForm(newForm);
  };

  const getAllPets = async () => {
    const response = await fetch("http://localhost:3333/all-pets");

    setAllpets(await response.json());
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.name || !form.text || !form.location || !form.image) {
        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 2000);
        return;
      }

      await fetch("http://localhost:3333/pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      message.open({
        type: "success",
        content: "Питомец добавлен",
      });

      setForm({ name: "", text: "", location: "", image: "" });

      getAllPets();
    } catch (e) {
      message.open({
        type: "error",
        content: "Не удалось добавить питомца",
      });
    }
  };

  const onDelete = async (id) => {
    try {
      await fetch(`http://localhost:3333/pet/${id}`, {
        method: "DELETE",
      });

      message.open({
        type: "success",
        content: "Питомец удален",
      });

      getAllPets();
    } catch (e) {
      message.open({
        type: "error",
        content: "Не удалось удалить питомца",
      });
    }
  };

  if (showLogin === "false" || showLogin === null) {
    return (
      <div className="admin-login">
        <h1>Войти в панель администратора</h1>
        <Input
          placeholder="Логин"
          value={loginForm.name}
          onChange={(e) => onChangeLogin("name", e)}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={loginForm.location}
          onChange={(e) => onChangeLogin("password", e)}
        />
        <input
          className="btn btn--red"
          type="button"
          value="Войти"
          onClick={login}
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="title">Все питомцы</h1>
      <div className="pets" id="pet_m">
        {allPets.length > 0 ? (
          allPets.map((pet) => {
            return (
              <div className="pets__item" key={pet._id}>
                <img className="pets_img" src={pet.image} alt={pet.name} />
                <div className="pets__content">
                  <div className="pets__title">{pet.name}</div>
                  <div className="pets__text">{pet.text}</div>
                  <input
                    className="btn btn--red delete-button"
                    value="Удалить"
                    onClick={() => onDelete(pet._id)}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-pets">На данный момент нет питомцев</div>
        )}
      </div>
      <h1 className="admin-form-title">Добавить питомца</h1>
      <div className="admin-form">
        <Input
          placeholder="Имя питомца"
          value={form.name}
          onChange={(e) => onChange("name", e)}
        />
        <Input
          placeholder="Локация"
          value={form.location}
          onChange={(e) => onChange("location", e)}
        />
        <Input
          placeholder="Ссылка на фотографию"
          value={form.image}
          onChange={(e) => onChange("image", e)}
        />
        <Input.TextArea
          placeholder="Описание"
          value={form.text}
          onChange={(e) => onChange("text", e)}
        />
        {showAlert && (
          <Alert
            type="error"
            style={{ width: "100%", marginBottom: 10 }}
            message="Заполните все поля формы"
            banner
          />
        )}
        <input
          className="btn btn--red add-button"
          name="submit"
          type="submit"
          value="Добавить"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default Admin;
