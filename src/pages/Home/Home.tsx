import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormModal } from "../../components/FormModal";
import { Navbar } from "../../components/Nav";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import taskService from "../../service/taskService";

interface Item {
  id: number
  title: string;
  description?: string
  severity: number;
  done: boolean;
}
interface Tasks {
  items: Array<Item>;
}


interface User {
  id: string;
  username: string;
  name: string;
  created_at: string;
  updated_at: string;
  token: string;
}

interface newTask {
  title: string;
  description?: string | null;
  categoryId?: number | null;
}



export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [tasks, setTasks] = useState<Array<Tasks> | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);


  useEffect(() => {
    taskService.list().then((response) => {
      if (response.ok) {
        const items: Array<Tasks> = response.data;

        if (items.length > 0) {
          setTasks(items);
        }
      }
    });
  }, []);


  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const user: User = JSON.parse(storedData);
      setUser(user);
    } else {
      navigate("/");
    }
  }, []);

  const handleTodo = async (task: newTask) => {
    const result = await taskService.create(task)

    if (result.ok) {
      console.log('teste', result.data, user)
      setTasks([...tasks, result.data])
    }

  };


  return (

    <div>
      <Navbar />

      <div className="flex gap-4 p-6 justify-center text-lg font-serif">
        <Button text="Tarefa" type="button" handleClick={() => setShowModal(true)} />
        <Button text="Categoria" type="button" bgColor='pink' />
        <FormModal setShowModal={(value) => setShowModal(value)} showModal={showModal} handleSave={handleTodo} />
      </div>
      <List items={tasks} />
    </div>

  );
}