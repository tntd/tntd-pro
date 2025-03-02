import React, { CSSProperties, ElementType } from "react";

export type BoxProps = {
  size?: number | string;
  bg?: string;
  round?: number | string;
  circle?: boolean;
  as?: ElementType;
} & Partial<CSSProperties> &
  React.HTMLAttributes<HTMLElement>;

const Box: React.FC<BoxProps> = ({
  size,
  bg,
  round,
  circle,
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
  if (circle) {
    boxStyle.borderRadius = "50%";
    boxStyle.display = "flex";
    boxStyle.justifyContent = "center";
    boxStyle.alignItems = "center";
  }

  return (
    <Component style={boxStyle} {...props}>
      {children}
    </Component>
  );
};

export default Box;
