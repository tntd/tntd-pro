import React, { FC, ComponentProps, useEffect, useState } from "react";
import cn from "classnames";
import "./index.less";

interface IProps extends Omit<ComponentProps<"div">, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode; // 重新定义 title 为 React.ReactNode
  extra?: React.ReactNode;
  tabList?: { label: string; value: string }[];
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  bodyHeight?: string;
  noBodyPadding?: boolean;
  hasPower?: boolean;
}

const TCard = (props: IProps) => {
  const {
    icon,
    title,
    extra,
    tabList = [],
    onTabChange,
    activeTabKey,
    bodyHeight,
    className,
    noBodyPadding = false,
    children,
    hasPower = false,
  } = props;

  const [currentTab, setCurrentTab] = useState("all");

  useEffect(() => {
    if (activeTabKey) {
      setCurrentTab(activeTabKey);
    }
  }, [activeTabKey]);

  return (
    <div
      className={cn("archive-card-wrap", className, {
        "no-power": !hasPower,
      })}
    >
      <div className="archive-card">
        <div className="archive-card-header">
          <div
            className="card-head-title"
            style={{
              width: tabList?.length > 0 ? "200px" : "auto",
            }}
          >
            {icon}
            <h2>{title}</h2>
          </div>
          <div className="card-head-tab">
            {tabList.map((item) => {
              return (
                <div
                  key={item.value}
                  className={cn("tab-item", {
                    active: item.value === currentTab,
                  })}
                  onClick={() => {
                    setCurrentTab(item.value);
                    onTabChange?.(item.value);
                  }}
                >
                  {item.label}
                  {currentTab === item.value && <i></i>}
                </div>
              );
            })}
          </div>
          <div className="card-head-extra">{extra}</div>
        </div>
        <div
          className="archive-card-body"
          style={{
            height: bodyHeight || "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default TCard;
