import { useState } from "react";
import { message, Alert } from "antd";

const Download = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.name || !form.email || !form.message) {
        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 2000);
        return;
      }

      message.open({
        type: "loading",
        content: "Идет отправка",
        duration: 1,
      });

      await fetch("http://localhost:3333/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      message.open({
        type: "success",
        content: "Ваше сообщение отправлено",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      message.open({
        type: "error",
        content: "Не удалось отправить сообщение",
      });
    }
  };

  return (
    <div className="download" id="help">
      <div className="container">
        <h3 className="download__title">Хотите помочь? Напишите нам!</h3>
        <form className="form">
          <label htmlFor="email">Электронный почтовый адрес</label>
          <input
            id="email"
            name="email"
            type="text"
            value={form.email}
            placeholder="user@gmail.com"
            onChange={onChange}
          />
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            value={form.name}
            onChange={onChange}
          />
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="33"
            placeholder="Ваще сообщение"
            value={form.message}
            onChange={onChange}
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
            className="btn btn--red"
            name="submit"
            type="submit"
            value="Хочу помочь"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Download;
