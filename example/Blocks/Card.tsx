import React, { useState } from "react";
import cn from "classnames";
import { Title, Card, TCard, WaterMark, Handle, Status } from "../../src";
import { Card as AntCard, Row, Col, Divider, Space } from "antd";
import { BulbOutlined, Html5TwoTone } from "@ant-design/icons";
// @ts-ignore
import branchImg from "../assets/branch.svg";
import "./tntCard.less";

export default () => {
  const [currentBranchTab, setCurrentBranchTab] = useState("all");

  const branchMapList = [
    {
      label: "全部",
      value: "all",
    },
    {
      label: "前端分支",
      value: "frontend",
    },
    {
      label: "后端分支",
      value: "backend",
    },
  ];

  return (
    <div>
      <Title
        title="简单card"
        subTitle="theme:simple"
        style={{
          marginBottom: 20,
        }}
      />
      <Card title="卡片标题" theme="simple">
        content
      </Card>
      <Title
        title="tnt card"
        style={{
          marginBottom: 20,
          marginTop: 20,
        }}
      />
      <AntCard className="tnt-card" title="我的标题">
        <div
          style={{
            background: "#e6e6e6",
          }}
        >
          <h1 style={{ margin: 0 }}>hello</h1>
        </div>
      </AntCard>
      <Title
        title="super card"
        subTitle="theme:super"
        style={{
          marginBottom: 20,
          marginTop: 20,
        }}
      />
      <TCard
        icon={<img src={branchImg} />}
        title="卡片标题"
        tabList={branchMapList}
        activeTabKey={currentBranchTab}
        onTabChange={(key) => {
          console.log(key);
        }}
        extra={
          <a>
            <BulbOutlined />
            添加演示环境
          </a>
        }
        hasPower
      >
        hello
      </TCard>
    </div>
  );
};
