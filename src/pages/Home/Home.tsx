import "./style.css";
import { useNavigate } from "react-router-dom";
import { BsPencilSquare, BsCheckLg, BsPersonCircle } from "react-icons/bs";
import Modal from 'react-modal';
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FormModal } from "../../components/FormModal";
import { Navbar } from "../../components/Nav";
import BottomTab from "../../components/Tabs";
import { TaskCard } from "../../components/TaskCard";
import { Button } from "../../components/Button";

interface User {
  id: string;
  username: string;
  name: string;
  created_at: string;
  updated_at: string;
  token: string;
}

Modal.setAppElement('#root');

export const Home = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState<User>();
  const [showModal, setShowModal] = useState<boolean>(false);

  // const handleModal = () => setOpen(!open);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const user: User = JSON.parse(storedData);
      setUser(user);
    } else {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("user", "{}");
    navigate("/");

  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleTodo = () => {
    console.log('Click')

  };


  const todoListByCategory = () => {
    return <div className="flex flex-col items-center justify-center text-gray-600">
    </div>
  }

  return (

    <div>
      <Navbar />

      <div className="flex gap-4 p-6 justify-center text-lg font-serif">
        <Button text="Tarefa" type="button" handleClick={() => setShowModal(true)} />
        <Button text="Categoria" type="button" bgColor='pink' />
        <FormModal setShowModal={(value) => setShowModal(value)} showModal={showModal} handleSave={() => handleTodo()} />
      </div>


      {/* {todoListByCategory()} */}

    </div>

  );
}