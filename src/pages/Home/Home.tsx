import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { FormModal } from "../../components/FormModal";
import { Navbar } from "../../components/Nav";
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
  const [user, setUser] = useState<User>();
  const [showModal, setShowModal] = useState<boolean>(false);


  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const user: User = JSON.parse(storedData);
      setUser(user);
    } else {
      navigate("/");
    }
  }, []);

  const handleTodo = () => {
    console.log('Click', user)

  };


  return (

    <div>
      <Navbar />

      <div className="flex gap-4 p-6 justify-center text-lg font-serif">
        <Button text="Tarefa" type="button" handleClick={() => setShowModal(true)} />
        <Button text="Categoria" type="button" bgColor='pink' />
        <FormModal setShowModal={(value) => setShowModal(value)} showModal={showModal} handleSave={() => handleTodo()} />
      </div>

    </div>

  );
}