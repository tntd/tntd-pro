import React, { useState } from "react";
import cn from "classnames";
import Card from "./Blocks/Card";
import Title from "./Blocks/Title";
import WaterMark from "./Blocks/WaterMark";
import Handle from "./Blocks/Handle";
import Status from "./Blocks/Status";
import Flex from "./Blocks/Flex";
import Blockquote from "./Blocks/Blockquote";
import "./index.less";

export default () => {
  const [name, setName] = useState("card");
  const menuList = [
    {
      label: "Blockquote",
      value: "blockquote",
    },
    {
      label: "Title",
      value: "title",
    },
    {
      label: "Card",
      value: "card",
    },
    {
      label: "WaterMark",
      value: "waterMark",
    },
    {
      label: "Handle",
      value: "handle",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Flex",
      value: "flex",
    },
  ];
  return (
    <div className="example-box">
      <div className="left">
        <ul>
          {menuList.map((item) => (
            <li
              key={item.value}
              className={name === item.value ? "active" : ""}
              onClick={() => setName(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        {name === "title" && <Title />}
        {name === "blockquote" && <Blockquote />}
        {name === "card" && <Card />}
        {name === "waterMark" && <WaterMark />}
        {name === "handle" && <Handle />}
        {name === "status" && <Status />}
        {name === "flex" && <Flex />}
      </div>
    </div>
  );
};
