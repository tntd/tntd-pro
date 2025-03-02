import React, { CSSProperties } from "react";

type FlexAlign = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

export type FlexProps = {
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  direction?: FlexDirection;
  basis?: string;
  grow?: number;
  shrink?: number;
  inline?: boolean;
  gap?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

const Flex: React.FC<FlexProps> = ({
  align,
  justify,
  wrap,
  direction,
  basis,
  grow,
  shrink,
  inline = false,
  gap,
  style,
  children,
  ...props
}) => {
  const flexStyle: CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexDirection: direction,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    ...style,
  };

  return (
    <div style={flexStyle} {...props}>
      {children}
    </div>
  );
};

export default Flex;
