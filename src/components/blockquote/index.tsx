import React, { CSSProperties } from "react";
import BlockquoteIcon from "./icon";
import "./index.less";

interface BlockquoteProps {
  color?: string;
  justify?: "start" | "center" | "end";
  variant?: "subtle" | "solid";
  cite?: string;
  children: React.ReactNode;
}

// 扩展 React.FC 类型以支持静态属性
type BlockquoteComponent = React.FC<BlockquoteProps> & {
  Icon: React.FC<IconProps>;
};

const Blockquote: BlockquoteComponent = ({
  color = "gray",
  justify = "start",
  variant = "subtle",
  cite,
  children,
}) => {
  let rootStyle: CSSProperties = {};
  if (color) {
    rootStyle = {
      borderColor: color,
    };
  }
  return (
    <blockquote
      className={`blockquote ${variant} ${justify}`}
      style={rootStyle}
    >
      <div className="blockquote-content">{children}</div>
      {cite && (
        <div className="blockquote-caption">
          <cite>{cite}</cite>
        </div>
      )}
    </blockquote>
  );
};

export interface IconProps {
  opacity?: number;
  boxSize?: number;
  rotate?: string;
  size?: number | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  opacity = 0.4,
  boxSize = 24,
  rotate = "0deg",
  size,
  color,
}) => {
  const iconBoxStyle: CSSProperties = {
    opacity: opacity,
    fontSize: boxSize,
    transform: `rotate(${rotate})`,
  };
  return (
    <div className="blockquote-icon" style={iconBoxStyle}>
      <BlockquoteIcon color={color} size={size} />
    </div>
  );
};

// 将 Icon 组件赋值给 Blockquote 的静态属性
Blockquote.Icon = Icon;

export default Blockquote;
