import { Button, Dropdown, MenuProps, Space } from "antd";
import React from "react";

export const FilterDropdown = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Completed Task
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          InCompleted Task
        </a>
      ),
    },
  ];
  return (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>Filter Task</Button>
      </Dropdown>
    </Space>
  );
};
