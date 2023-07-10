import React, { FC } from "react";
import { Checkbox } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Todo } from "../../utils/interface";
import "./index.css";

interface ToDoItemProps {
  todo: Todo;
  handleDelete: (id: string) => void;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo, handleDelete }) => {
  return (
    <div className="to-do-item">
      <section>
        <Checkbox checked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </section>
      <section>
        <EditFilled />
        <DeleteFilled onClick={() => handleDelete(todo.id)} />
      </section>
    </div>
  );
};

export { ToDoItem };
