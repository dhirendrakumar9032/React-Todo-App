import React, { useEffect, useState } from "react";
import "./index.css";
import { Button } from "antd";
import { ToDoItem } from "../To-do Items";
import { Todo } from "../../utils/interface";
import { generateUniqueId } from "../../utils/helper";
import { log } from "console";

const ToDoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [isEditable, setEditable] = useState<any>({
    id: "id",
    edit: false,
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTask, setCompletedTask] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (!isEditable.edit) {
      const newTodo: Todo = {
        isCompleted: false,
        todo: inputText,
        id: generateUniqueId(),
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } else {
      const newTodoList = todos.map((todo) => {
        if (todo.id === isEditable.id) {
          return {
            ...todo,
            todo: inputText,
          };
        } else {
          return todo;
        }
      });
      setTodos(newTodoList);
    }
    setInputText("");
    setEditable({ id: "", edit: false });
  };

  const handleCompleteAll = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, isCompleted: true }));
    setTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onCompleteTask = (id: string, isCompleted: boolean) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: isCompleted,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  const onEdit = (id: string) => {
    const editText = todos.find((todo) => todo.id === id)?.todo;
    editText && setInputText(editText);
    setEditable({ id, edit: true });
  };

  useEffect(() => {
    const totalCompleted = todos.filter((todo) => todo.isCompleted);
    setCompletedTask(totalCompleted.length);
  }, [todos]);

  return (
    <div className="main-container">
      <h1>To-do List</h1>
      <section className="input-field">
        <input
          type="text"
          placeholder="Please write here..."
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>
          {isEditable.edit ? "Update" : "Add Todo"}
        </button>
      </section>
      <div className="to-do-list">
        <section className="filter-btn">
          <Button type="primary" onClick={handleCompleteAll}>
            Complete All Task
          </Button>
          <Button type="primary" onClick={handleDeleteAll}>
            Delete To-Do Items
          </Button>
        </section>
        <section className="to-do-items">
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              onCompleteTask={onCompleteTask}
              onEdit={onEdit}
            />
          ))}
        </section>
        <section className="footer">
          <Button>Filter</Button>
          <h5>Completed:{completedTask}</h5>
          <p>Total Task: {todos.length}</p>
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
