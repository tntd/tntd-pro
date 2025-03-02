import React, { CSSProperties, ElementType } from "react";

export type BoxProps = {
  type?: "default" | "circle" | "square";
  size?: number | string;
  bg?: string;
  round?: number | string;
  circle?: boolean;
  as?: ElementType;
} & Partial<CSSProperties> &
  React.HTMLAttributes<HTMLElement>;

const Box: React.FC<BoxProps> = ({
  type = "default",
  size,
  bg,
  round,
  as: Component = "div",
  style,
  children,
  ...props
}) => {
  const boxStyle: CSSProperties = {
    backgroundColor: bg,
    borderRadius: round,
    ...style,
    ...props,
  };
  if (size) {
    boxStyle.width = size;
    boxStyle.height = size;
  }
  if (type === "circle") {
    boxStyle.borderRadius = "50%";
    boxStyle.display = "flex";
    boxStyle.justifyContent = "center";
    boxStyle.alignItems = "center";
  }
  if (type === "square") {
    boxStyle.borderRadius = round;
  }

  return (
    <Component style={boxStyle} {...props}>
      {children}
    </Component>
  );
};

export default Box;
