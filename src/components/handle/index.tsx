import React, { Fragment, ReactNode, ReactElement } from "react";
import { Divider, Dropdown, Menu, Popconfirm, type PopoverProps } from "antd";
import { MoreOutlined, DownOutlined } from "@ant-design/icons";

import "./index.less";

const clsPrefix = "tntd-handle";

interface MoreMenusProps {
  children?: ReactNode | ReactNode[];
  type?: string;
  num?: number;
  lang?: string;
  divider?: boolean;
  lessOneMoreFit?: boolean;
  popConfirmHandle?: boolean;
  isIconBtn?: boolean;
  stopPropagation?: boolean;
  [key: string]: any; // 允许其他任意属性
}

const Handle: React.FC<MoreMenusProps> = ({
  children = [],
  type,
  num = 3,
  lang,
  divider = true,
  lessOneMoreFit,
  popConfirmHandle,
  isIconBtn,
  stopPropagation = true,
  ...rest
}) => {
  let newChildren: ReactNode[] = [];
  if (Array.isArray(children)) {
    newChildren = children?.filter((item) => !!item) || [];
  } else if (children) {
    newChildren.push(children);
  }

  // 子元素大于1个，且不是 icon元素
  const specialSceneDefaultShow = newChildren?.length > 1 && !isIconBtn;

  if (specialSceneDefaultShow && popConfirmHandle) {
    newChildren?.forEach((v, i) => {
      const element = v as ReactElement;
      const { type, props } = element;
      if (
        type === Popconfirm ||
        (props.hasOwnProperty("onConfirm") &&
          typeof props?.onConfirm === "function")
      ) {
        let placement = {};
        if (
          num &&
          !isNaN(num) &&
          i + 1 > num &&
          !(lessOneMoreFit && newChildren.length - num === 1)
        ) {
          placement = {
            placement: "left",
          };
        }
        newChildren[i] = React.cloneElement(element, {
          overlayStyle: { width: 180 },
          ...(element?.props || {}),
          onClick: (e: React.MouseEvent) => e.stopPropagation(),
          ...placement,
          trigger: "hover",
          getPopupContainer: (trigger: HTMLElement) => trigger.parentNode,
        });
      }
    });
  }

  let [preChildPart, lastChildPart] = [newChildren, null as ReactNode[] | null];

  // 只有1个时不适配
  if (lessOneMoreFit && newChildren.length - num === 1) {
    preChildPart = newChildren;
  } else if (newChildren && num && !isNaN(num) && newChildren.length > num) {
    preChildPart = newChildren.slice(0, num);
    lastChildPart = newChildren.slice(num);
  }

  if (divider && preChildPart) {
    const preChildLen = preChildPart.length;
    preChildPart = preChildPart.map((dom, i) => (
      <Fragment key={i}>
        {dom}
        {!(
          (i === preChildLen - 1 && !lastChildPart?.length) // 没有更多 且 是最后一个时 不显示 Divider
        ) && <Divider type="vertical" />}
      </Fragment>
    ));
  }

  const menu = (childArr: ReactNode[]) => (
    <Menu className="org-pop-opera-btn">
      {childArr?.map((child, i) => (
        <Menu.Item key={i}>{child}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      className={clsPrefix}
      onClick={(e: React.MouseEvent) => {
        if (stopPropagation) {
          e.stopPropagation();
        }
      }}
      {...rest}
    >
      {preChildPart}
      {!!lastChildPart?.length && (
        <Dropdown overlay={menu(lastChildPart || [])} arrow>
          {type === "icon" ? (
            <MoreOutlined />
          ) : (
            <a className="ant-dropdown-more">
              更多
              <i className={`${clsPrefix}-dropdown-icon`}>
                <DownOutlined />
              </i>
            </a>
          )}
        </Dropdown>
      )}
    </div>
  );
};

export default Handle;
