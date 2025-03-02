import React, { FC, ComponentProps } from "react";
import cc from "classnames";
import type { CardProps as AntdCardProps } from "antd/lib/card";
import { Card } from "antd";
import "./index.less";

export interface CardProps extends AntdCardProps {
  theme?: "default" | "style1" | "style2";
}

export const TntCard: FC<CardProps> = ({
  theme = "default",
  children,
  className,
  ...rest
}) => {
  const cardTheme = {
    themeDefault: theme === "default",
    themeS1: theme === "style1",
  };

  return (
    <Card {...rest} className={cc(["card", className, { ...cardTheme }])}>
      {children}
    </Card>
  );
};

export default TntCard;
