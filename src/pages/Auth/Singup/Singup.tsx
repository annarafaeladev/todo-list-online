import { BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../../../service/userService";
import "../Auth.css";

export const Singup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !name || !password) {
      setFormError("Campos Obrigatório não preenchidos!");
      return;
    }

    const result = await service.signup(username, password, name);

    if (result.ok) {
      setUsername("");
      setName("");
      setPassword("");
      setFormError("");

      navigate("/")

    }
  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillAdd size={40} />
          Criar Conta
        </h1>
        <form className="input_field" onSubmit={handleSignup} autoComplete="off">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder="Email"
            type="email"
            name="username"
            value={username}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {formError && (
            <p className="error-message">{formError}</p>
          )}
          <div className="log_buttons">
            <button type="submit" className="button_auth">
              Criar Conta
            </button>
            <Link to="/" className="button_link">
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
