import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";
import service from "../../../service/userService";
import "../Auth.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Campos Obrigatório não preenchidos!");
      return;
    }

    const result = await service.login(username, password);

    if (result.ok) {
      setUsername("");
      setPassword("");
      setErrorMessage("");
    }

  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillCheck size={45} />
          Login
        </h1>
        <form className="input_field" onSubmit={handleLogin} autoComplete="off">
          <input
            placeholder="Username"
            type="text"
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="log_buttons">
            <button type="submit" className="button_auth">
              Entrar
            </button>
            <Link to="/auth" className="button_link">
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
