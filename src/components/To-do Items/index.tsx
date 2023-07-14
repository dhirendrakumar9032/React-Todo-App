import React, { FC } from "react";
import { Checkbox, Space } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Todo } from "../../utils/interface";
import "./index.css";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface ToDoItemProps {
  todo: Todo;
  handleDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onCompleteTask: (id: string, isCompleted: boolean) => void;
}

const ToDoItem: FC<ToDoItemProps> = ({
  todo,
  handleDelete,
  onEdit,
  onCompleteTask,
}) => {
  const onChange = (e: CheckboxChangeEvent) => {
    onCompleteTask(todo.id, e.target.checked);
  };

  return (
    <Space
      className={`to-do-item ${todo.isCompleted && "to-do-item-completed"}`}
    >
      <section>
        <Checkbox checked={todo.isCompleted} onChange={onChange} />
        <span>{todo.todo}</span>
      </section>
      <section>
        <EditFilled onClick={() => onEdit(todo.id)} />

        <DeleteFilled onClick={() => handleDelete(todo.id)} />
      </section>
    </Space>
  );
};

export { ToDoItem };
