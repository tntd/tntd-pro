import React, { FC, ComponentProps } from "react";
import cc from "classnames";
import type { CardProps as AntdCardProps } from "antd/lib/card";
import { Card } from "antd";
import "./index.less";

export interface CardProps extends AntdCardProps {
  theme?: "default" | "simple";
}

export const TntCard: FC<CardProps> = ({
  theme = "default",
  children,
  className,
  ...rest
}) => {
  const cardTheme = {
    themeDefault: theme === "default",
    simple: theme === "simple",
  };

  return (
    <Card {...rest} className={cc(["card", className, { ...cardTheme }])}>
      {children}
    </Card>
  );
};

export default TntCard;
