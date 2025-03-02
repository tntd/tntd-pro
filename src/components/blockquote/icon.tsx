import React from "react";

interface IconProps {
  color?: string;
  size?: string | number;
  rotate?: string;
}

const BlockquoteIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = "24",
  rotate = "0deg",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1433 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: `rotate(${rotate})`,
      color, // 使用 color 属性控制图标颜色
    }}
  >
    <path
      d="M1331.2 0h-307.2l-204.8 409.6v614.4h614.4V409.6h-307.2l204.8-409.6zM512 0H204.8L0 409.6v614.4h614.4V409.6H307.2l204.8-409.6z"
      fill="currentColor"
    />
  </svg>
);

export default BlockquoteIcon;
