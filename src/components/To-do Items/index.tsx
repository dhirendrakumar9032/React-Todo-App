import { Checkbox } from "antd";
import React, { FC } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import "./index.css";

interface ToDoItemProps {
  todo?: any;
  handleDelete: (id: string) => void;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo, handleDelete }) => {
  console.log({ todo });
  return (
    <div className="to-do-item">
      <section>
        <Checkbox checked={todo.isCompted} />
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
